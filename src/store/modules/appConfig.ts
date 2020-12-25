// state
import ProjectConfig from '../../settings'
import { IProjectConfig } from '@/types/IProjectConfig'
const state = {
  // 系统状态
  ProjectConfig:ProjectConfig
}
// mutations
const mutations = {
  // 改变系统状态
  CHANGEPROJECTCONFIG(state: any, data: any) {
    state.ProjectConfig[data.name] = data.value
  }
}
// getters
const getters = {
  getAppConfig: (state:any) => {
    return state.ProjectConfig
  }
}
// actions
const actions = {
  // 改变系统状态
  changeProjectConfig(context:any, data:any) {
    context.commit('CHANGEPROJECTCONFIG', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}