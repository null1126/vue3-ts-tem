import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import '@/assets/css/global.less'
import './assets/icon/iconfont.css'
import i18n from '../src/language/i18n'
const app = createApp(App)

const ISMock = process.env.VUE_APP_MOCK // 是否使用Mock模拟数据
if(ISMock && ISMock === 'true') require('@/mock');

app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
