import { createI18n } from '@yangss/vue3-i18n'
import cn from './cn'
import en from './en'

const i18n = createI18n({
    locale: 'zh-CN',
    messages: {
      'zh-CN': cn,
      'en-US': en
    }
  })

export default i18n;