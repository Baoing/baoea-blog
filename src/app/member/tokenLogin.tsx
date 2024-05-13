"use client"
import {useState} from "react";
import {Button, Input} from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import stores from "@/stores";

const TokenLogin = () => {
  const {MembersStore} = stores
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState("")


  const handleLogin = () => {
    if(token){
        MembersStore.addMember(token)
    }else{
        toast.error("请输入Token")
    }
  }

  return <div className={"gap-2 flex flex-col"}>

    <div className={"flex gap-2"}>
      <Input
        value={token}
        onChange={(e)=> {
          setToken(e.target.value)
        }}
        type="text"
        label="Token"
        className="max-w-sm"
      />
    </div>

    <Button className={"w-[384px] max-w-full"} onClick={handleLogin} isLoading={loading}>登录</Button>

    <Toaster richColors  />
  </div>
}

export default TokenLogin