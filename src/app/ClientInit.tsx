"use client"
import {useEffect} from "react";
import {isBrowser} from "@/utils/utils";
import stores from "@/stores";

// 客户端初始化
const ClientInit = () => {
  const {MembersStore} = stores
  useEffect(()=>{
    console.log(121212)
    const tokens = isBrowser() ? window.localStorage.getItem("bao-tokens") : ""
    tokens && tokens.split(",").map(token=> MembersStore.addMember(token))
  }, [])
  return <div />
}
export default ClientInit