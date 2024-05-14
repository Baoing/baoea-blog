import {action, makeAutoObservable, observable} from "mobx"
import {getCoupon, getCoupon100, getCoupon300, getInfoByToken} from "@/utils/api";
import {toast} from "sonner";
import {isBrowser} from "@/utils/utils";
import {b} from "@nextui-org/slider/dist/use-slider-64459b54";

export type Member = {
  token: string
  data: {
    head: any
    mebName: string
    mebPoint: number // 积分
    memberMap: any
    mobile: string
    nickname: null | string
  },
}
type couponType = {
  name: string
  code: string
  mobile: string
  token: string
}
export type MembersStoreProps = {
  users: Member[]
  coupons: couponType[]
}

export default class MembersStore implements MembersStoreProps {
  @observable users:Member[] = []
  @observable coupons:couponType[] = []

  constructor() {
    // 使用这个才会在 MobX 6 上才会更新视图
    makeAutoObservable(this)
  }

  @action.bound
  addMember(token:string) {
    if(!token) return
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
          isBrowser() && window.localStorage.setItem("bao-tokens", tokens)

          // getCoupon(token).then((res)=>{
          //   if(res.code===200){
          //     toast.success('100积分领取成功或者超出：'+ res.data.msg)
          //   }else{
          //     toast.error('100积分领券失败,' + res.msg)
          //   }
          // })
          // getCoupon300(token).then((res)=>{
          //   if(res.code===200){
          //     toast.success('领取300无门槛：'+ res.data.msg)
          //   }else{
          //     toast.error('领取300无门槛失败,' + res.msg)
          //   }
          // })
          // getCoupon100(token).then((res) => {
          //   if(res.code===200){
          //     toast.success('领取100无门槛：'+ res.data.msg)
          //   }else{
          //     toast.error('领取100无门槛失败,' + res.msg)
          //   }
          // });
        }else{
          toast.error(msg + ", Token错误或者已过期")
        }
      })
    }
  }

  @action.bound
  addCoupons(token:string, couponsInfo:{ name: string, code: string}) {
    const target = this.users.find(item=>item.token === token)
    if(target){
      this.coupons.push({...couponsInfo, token, mobile:target.data.mobile})
    }
  }

  @action.bound
  exportTokens() {
    return this.users.map(user=> user.token).toString()
  }

  @action.bound
  /**
   * 导入账户
   * @param tokens tokens
   * @param isCover 是否覆盖
   */
  importTokens(tokens: string, isCover?:boolean) {
    if(isCover){
      this.users = []
    }
    tokens.split(",").forEach(token=>{
      this.addMember(token)
    })
  }
  @action.bound
  /**
   * 移除账户
   * @param token token
   */
  removeUsers(token?: string) {
    if(token === undefined){
      this.users = []
      isBrowser() && window.localStorage.removeItem("bao-tokens")
    }
    if(token){
      this.users = this.users.filter(user=> user.token !== token)
      const tokens = this.users.map(item=>item.token).toString()
      isBrowser() && window.localStorage.setItem("bao-tokens", tokens)
    }
  }
}