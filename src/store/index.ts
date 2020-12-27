import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import appConfig from './modules/appConfig'

export default createStore({
  modules: {
    appConfig, // 公用
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage, // 修改存储的状态
      paths: ['appConfig'] // 存储的指定的模块的名字（存储某个模块对象）
    })
  ] // 状态持久化
})

