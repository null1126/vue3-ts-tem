import screenfull from 'screenfull'
import { ElMessage } from 'element-plus'
import { IChangeProjectConfig } from '@/types/IProjectConfig'
import store from '../store/index'

/**
 * @description 全屏显示
 */
export const fullScreen = () => {
    if (!screenfull.isEnabled) {
      ElMessage.warning({
        message: '您的浏览器暂不支持全屏显示，请更换浏览器再试哦~',
        type: 'warning'
      });
      return false
    } else {
      screenfull.toggle()
      return true
    }
}

/**
 * @description 修改系统配置
 * @param e 修改的内容
 * @param name 修改的名称
 */
export const useChangeAppConfig = (e: string, name: string) => {
  let html = window.document.getElementsByTagName('html')[0]
  let specialArr = ['grayMode', 'colorWeak']
  if(specialArr.indexOf(name) > -1 && e) {
    html.classList.add(name)
  } else {
    html.className =''
  }
  const obj: IChangeProjectConfig = {
    name: '',
    value: ''
  }
  obj.name = name
  obj.value = e
  console.log(`修改系统配置[${name}]为：${e}`)
  store.dispatch('appConfig/changeProjectConfig', obj)
}
