"use client"
import { Button, Input, Tabs, Tab, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Login from "@/app/member/login";
import TokenLogin from "@/app/member/tokenLogin";
import {addBooking} from "@/utils/api"
import copy from 'copy-to-clipboard'

import { Observer, Provider as MobxProvider} from "mobx-react"
import stores from "@/stores";
import {getParkingCoupon} from "./metadata"
import { toast } from "sonner";

  
export default function Member() {
    const handleAddbooking = (token: string) => {
        const {headers, body} = getParkingCoupon(token)

        addBooking({
          headers,
          body
        }).then(({code, msg, data})=>{
          toast(msg)
        })

    }

    const copyToClipboard = (content: string) => {
        // Get the value of the `value` attribute of the <Input> component
        // copy(this.myInput.value)
        copy(content)
        toast.success("复制成功")
    }

    const { MembersStore } = stores

    return <Observer>{()=>{
      return <div className="p-5">
        <Tabs aria-label="Options">
          <Tab key="password" title="账户密码登录">
            <Card>
              <CardBody>
                <Login />
              </CardBody>
            </Card>  
          </Tab>
          
          <Tab key="token" title="Token登录">
            <Card>
              <CardBody>
                <TokenLogin />
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>

      <Divider className="mb-4" />

      {
        MembersStore.users.length <=0
        ?<div className="p-4">暂未登录账户</div>
        : <Tabs aria-label="Options">
          {
            MembersStore.users.map(user => 
              <Tab key={user.data.mobile} title={user.data.mobile}>
                <Card>
                  <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                      <p className="text-small text-default-500">手机号：{user.data.mobile}</p>
                      <p className="text-small text-default-500">剩余积分：{user.data.mebPoint}</p>
                       <p className="text-small text-default-500 flex gap-2 items-center">
                           <span>Token：{user.token.slice(0,20)}...</span>
                           <Button size={"sm"} onClick={() => copyToClipboard(user.token)}>复制</Button>
                       </p>
                    </div>
                  </CardHeader>
                  <Divider/>
                  <CardBody className="flex gap-2 flex-row flex-wrap">
                    <Button className="w-[100px]" onClick={() => handleAddbooking(user.token)}>
                        抢购停车券
                    </Button>
                    
                    <Button className="w-[100px]" onClick={() => handleAddbooking(user.token)}>
                        抢购迪士尼
                    </Button>
                  </CardBody>
                </Card>  
              </Tab>)
          }
        </Tabs>
      }
    </div>
    }}</Observer>
}