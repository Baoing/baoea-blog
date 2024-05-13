import {action, makeAutoObservable, observable} from "mobx"
import {getCoupon, getCoupon100, getCoupon300, getInfoByToken} from "@/utils/api";
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
  @observable users:Member[] = []

  constructor() {
    // 使用这个才会在 MobX 6 上才会更新视图
    const tokens = window.localStorage.getItem("bao-tokens")
    // 初始化
    tokens && tokens.split(",").map(token=> this.addMember(token))
    makeAutoObservable(this)
  }

  @action.bound
  addMember(token:string) {
    if(!token) return
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

          const tokens = this.users.map(item=>item.token).toString()
          window.localStorage.setItem("bao-tokens", tokens)

          getCoupon(token).then((res)=>{
            if(res.code===200){
              toast.success('100积分领取成功或者超出：'+ res.data.msg)
            }else{
              toast.error('100积分领券失败,' + res.msg)
            }
          })
          getCoupon300(token).then((res)=>{
            if(res.code===200){
              toast.success('领取300无门槛：'+ res.data.msg)
            }else{
              toast.error('领取300无门槛失败,' + res.msg)
            }
          })
          getCoupon100(token).then((res) => {
            if(res.code===200){
              toast.success('领取100无门槛：'+ res.data.msg)
            }else{
              toast.error('领取100无门槛失败,' + res.msg)
            }
          });

        }else{
          toast.error(msg + ", Token错误或者已过期")
        }
      })
    }
  }
}