"use client"

import PageContainer from "@/app/components/PageContainer";
import {Button, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure} from "@nextui-org/react";
import {Table} from "@nextui-org/table";
import stores from "@/stores";
import {Observer} from "mobx-react"
import {copyToClipboard} from "@/utils/utils";
import ImportModal from "@/app/accounts/importModal";
import AddAccount from "@/app/accounts/addAccount";

const Page = () => {
  const {MembersStore} = stores

  return <Observer>{() => {
    return <PageContainer>
      <div className="flex flex-wrap gap-4 items-center">
        <AddAccount />

        <ImportModal />

        <Button variant="shadow" onPress={()=> copyToClipboard(MembersStore.exportTokens())}>
          导出账户
        </Button>
      </div>



      <Table className={"mt-4"} aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>序号</TableColumn>
          <TableColumn>昵称</TableColumn>
          <TableColumn>账户</TableColumn>
          <TableColumn>积分</TableColumn>
          <TableColumn>Token</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"暂未登录账户"}>
          {
            MembersStore.users.map((user, index) => <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.data.mebName}</TableCell>
              <TableCell>{user.data.mobile}</TableCell>
              <TableCell>{user.data.mebPoint}</TableCell>
              <TableCell>{user.token.slice(0, 23)}...</TableCell>
            </TableRow>)
          }
        </TableBody>
      </Table>
    </PageContainer>
  }}</Observer>
}
export default Page