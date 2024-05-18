import {action, makeAutoObservable, observable} from "mobx"
import {draw, geDrawChance, getCoupon, getCoupon100, getCoupon300, getInfoByToken} from "@/utils/api";
import {toast} from "sonner";
import {isBrowser} from "@/utils/utils";

type PriceTypePriceType = {
  giftType: number
  id:number
  img:string
  reasonType:null |number
  result: number
}

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
  drawChanges?: number
  prizes?: PriceTypePriceType[]
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

  /**
   * 添加会员
   * @param token
   */
  @action.bound
  addMember(token:string, isInit?: boolean) {
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

          if (isBrowser() && !isInit){
            const tokens = this.users.map(item=>item.token).toString()
            window.localStorage.setItem("bao-tokens", tokens)
          }

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
          toast.error(msg + ", Token错误或者已过期。Token:" + token)
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

  /**
   * 导出token
   */
  @action.bound
  exportTokens() {
    return this.users.map(user=> user.token).toString()
  }


  /**
   * 导出token和手机号
   */
  @action.bound
  exportTokensAndPhones() {
    if(this.users.length){
      const data = this.users.map(user=> {
        return {token: user.token, phone: user.data.mobile}
      })
      return JSON.stringify(data)
    }else{
      return ""
    }
  }

  /**
   * 导入账户
   * @param tokens tokens
   * @param isCover 是否覆盖
   */
  @action.bound
  importTokens(tokens: string, isCover?:boolean) {
    if(isCover){
      this.users = []
    }
    tokens.split(",").forEach(token=>{
      this.addMember(token)
    })
  }
  /**
   * 移除账户
   * @param token token
   */
  @action.bound
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

  /**
   * 更新抽奖
   * @param token token
   */
  @action.bound
  updateUserDraw(token?: string) {
    this.users.forEach(user=> {
      geDrawChance(user.token).then(res=>{
        if(res.code === 200){
          user.drawChanges = res.data.chance
        }
      })
    })
  }
  /**
   * 自动抽奖
   */
  @action.bound
  autoDraw() {
    this.users.forEach(user=> {
      if(user.drawChanges && user.drawChanges > 0){
        this.draw(user)
      }
    })
  }
  /**
   * 自动抽奖
   */
  @action.bound
  draw(user: Member) {
    console.log(user)
    draw(user.token).then(res=>{
      if(res.code === 200){
        if(res.data.id === 1156){
          toast.success(`手机号：${user.data.mobile}抽到了奈雪100元券`)
        }
        if(res.data.id === 1158){
          toast.success(`手机号：${user.data.mobile}抽到了芒果年卡`)
        }
        if(user.prizes){
          user.prizes.push(res.data)
        }else{
          user.prizes = [res.data]
        }
        if(user.drawChanges){
          user.drawChanges = user.drawChanges - 1
          // 还有次数，继续抽奖
          if(user.drawChanges && user.drawChanges > 0){
            setTimeout(()=>{
              this.draw(user)
            }, 3000)
          }
        }
      }
    })
  }


}