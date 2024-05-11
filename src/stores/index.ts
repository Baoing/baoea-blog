import MembersStore from "./MembersStore"

export interface IStores {
  MembersStore: MembersStore,
}

/**
 * @stores 集合所有的 stores
 * @example componentStore: new ComponentStore()
 */
const stores: IStores = {
  MembersStore: new MembersStore(),
}

export default stores