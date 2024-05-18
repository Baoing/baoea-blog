"use client"

import PageContainer from "@/app/components/PageContainer";
import {Button, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {Table} from "@nextui-org/table";
import stores from "@/stores";
import {Observer} from "mobx-react"
import {copyToClipboard} from "@/utils/utils";
import {useEffect, useState} from "react";
import {geLuckDraw} from "@/utils/api";
import {toast} from "sonner";

type prizeType = {
    giftType: number
    id: number
    imgUrl: string
    name: string
}

const Page = () => {
    const {MembersStore} = stores
    const [loading, setLoading] = useState(false);
    // const [prizes, setPrizes] = useState<prizeType[]>([])

    // useEffect(() => {
    //     geLuckDraw().then(res=>{
    //         const target = res.data.modules.find(item =>item.type === "luck-draw")
    //
    //         if(target){
    //             setPrizes(target.prizes)
    //         }
    //     })
    // }, []);
    return <Observer>{() => {

        return <PageContainer>
            <div className={"mt-4"}>账户数量：{MembersStore.users.length}</div>

            <div className="mt-4 flex flex-wrap gap-4 items-center">
                <Button isLoading={loading || MembersStore.users.length === 0} variant="shadow" onPress={() => {
                    setLoading(true)
                    MembersStore.updateUserDraw()
                    toast.success(`开始检测各账户剩余抽奖次数`)

                    setTimeout(() => {
                       toast.success(`账号数量${MembersStore.users.length}, 开始自动抽奖!`)
                        MembersStore.autoDraw()
                        setLoading(false)
                    }, 6000)
                }}>
                    自动抽奖
                </Button>
            </div>

            {/*<div className={"mt-4"}>*/}
            {/*    奖品列表：*/}

            {/*    {prizes.map(prize=> <div className={"mt-2 flex gap-2 items-center"} key={prize.id}>*/}
            {/*        奖品名称:{prize.name} 奖品类型:{prize.giftType}  奖品ID:{prize.id} 奖品图：<img className={"w-8"} src={prize.imgUrl} alt=""/>*/}
            {/*    </div>)}*/}
            {/*</div>*/}

            <Table className={"mt-4"} align={"center"} aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>序号</TableColumn>
                    <TableColumn>账户</TableColumn>
                    <TableColumn>剩余抽奖次数</TableColumn>
                    <TableColumn>抽到的奖品</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"暂未登录账户"}>
                    {
                        MembersStore.users.map((user, index) => <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{user.data.mobile}</TableCell>
                            <TableCell>{user.drawChanges || "-"}</TableCell>
                            <TableCell className={"flex gap-2 flex-wrap"}>{user.prizes?.map((item,index)=> <div key={index}>
                                <img className={"w-20"} src={item.img} alt=""/>
                            </div>)}</TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </PageContainer>
    }}</Observer>
}
export default Page