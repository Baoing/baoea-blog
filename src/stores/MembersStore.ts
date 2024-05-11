import {action, makeAutoObservable, observable} from "mobx"

export type Member = {
  token: string
  info: any
}
export type MembersStoreProps = {
  users: Member[]
}

export default class MembersStore implements MembersStoreProps {
  @observable users = []

  constructor() {
    // 使用这个才会在 MobX 6 上才会更新视图
    makeAutoObservable(this)
  }

  @action.bound
  addMember(token:string) {
    console.log("所添加Token",token)
  }
}