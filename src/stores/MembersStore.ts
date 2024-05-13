import {action, makeAutoObservable, observable} from "mobx"
import {getInfoByToken} from "@/utils/api";
import {toast} from "sonner";
import { log } from "console";

export type Member = {
  token: string
  data: {
    head: any
    mebName: string
    mebPoint: number // 积分
    memberMap: any
    mobile: string
    nickname: null | string
  }
}
export type MembersStoreProps = {
  users: Member[]
}

export default class MembersStore implements MembersStoreProps {
  @observable users:Member[] = [{token: "xxxxx",   data: {
    head: "x",
    mebName: "xxx",
    mebPoint: 1000,
    memberMap: "12",
    mobile: "18779580591",
    nickname: "xxx"
  }}]

  constructor() {
    // 使用这个才会在 MobX 6 上才会更新视图
    makeAutoObservable(this)
  }

  @action.bound
  addMember(token:string) {
    console.log("所添加Token",token)
    const noToken = this.users.findIndex(user=> user.token === token) === -1

    if(noToken){
      getInfoByToken(token).then(({data, code, msg})=>{
        if (code === 200){
          const targetIndex:number = this.users.findIndex(user=> user.data.mobile === data.mobile)
          toast.success("登录成功")
          if(targetIndex !== -1) {
            this.users[targetIndex] = {token, data}
          }else{
            this.users = [...this.users, {token, data}]
          }
          console.log(this.users)
        }else{
          toast.error(msg + ", Token错误或者已过期")
        }
      })
    }
  }
}