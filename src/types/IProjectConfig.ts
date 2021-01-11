
import { headerTypeEnum, MenuTypeEnum, LanguageEnum, RouterTransitionEnum } from '@/enums/index'

/**
 * @description 系统配置接口
 */
export interface IProjectConfig {
  /**
   * @description 系统名称
   */
  systemName: string;

  /**
   * @description 是否显示配置按钮
   */
  showSettingButton: boolean;

  /**
   * @description 网站灰色模式，用于可能悼念的日期开启
   */
  grayMode: boolean;

  /**
   * @description 是否开启色弱模式
   */
  colorWeak: boolean;

  /**
   * @description 主题色
   */
  themeColor: string;

  /**
   * @description 语言
   */
  language: LanguageEnum;
  
  /**
   * @description 全屏显示主界面(不显示菜单,及顶部)
   */
  fullContent: boolean;

  /**
   * @description 区域宽度
   */
  sideBarWidth: number;

  /**
   * @description 菜单背景颜色
   */
  sideBarBgc: string;

  /**
   * @description 头部背景颜色
   */
  headerBgc: string;

  /**
   * @description 底部背景颜色
   */
  footerBgc: string;

  /**
   * @description 菜单文字颜色
   */
  menuTextColor: string;
  
  /**
   * @description 菜单被激活的文字颜色
   */
  menuActiveTextColor: string;

  /**
   * @description 是否显示logo
   */
  showLogo: boolean;

  /**
   * @description 是否显示底部
   */
  showFooter: boolean;

  /**
   * @description 固定头部
   */
  headerFixed: boolean;

  /**
   * @description 头部配置
   */
  headerSetting: headerTypeEnum;

  /**
   * @description 菜单类型
   */
  menuType: MenuTypeEnum;

  /**
   * @description 是否只保持一个子菜单的展开
   */
  uniqueOpened: boolean;

  /**
   * @description 超时时间
   */
  timeout: number;
  
  /**
   * @description 菜单折叠
   */
  menuFold: boolean;

  /**
   * @description 是否显示标签
   */
  multiTabsSetting: boolean;

  /**
   * @description pageLayout是否开启keep-alive
   */
  openKeepAlive: boolean;

  /**
   * @description 锁屏时间
   */
  lockTime: number;

  /**
   * @description 显示面包屑
   */
  showBreadCrumb: boolean;

  /**
   * @description 显示面包屑图标
   */
  showBreadCrumbIcon: boolean;

  /**
   * @description 使用error-handler-plugin
   */
  useErrorHandle: boolean;

  /**
   * @description 开启页面切换动画
   */
  openRouterTransition: boolean;

  /**
   * @description 路由切换动画
   */
  routerTransition: string;

  /**
   * @description 是否开启登录安全校验
   */
  openLoginVerify: boolean;

  /**
   * @description 是否监听网络变化
   */
  listenNetWork: boolean;

  /**
   * @description 是否开启页面切换loading
   */
  openPageLoading: boolean;

  /**
   * @description 是否开启回到顶部
   */
  useOpenBackTop: boolean;

  /**
   * @description 开启顶部进度条
   */
  openNProgress: boolean;

  /**
   * @description 是否可以嵌入iframe页面
   */
  canEmbedIFramePage: boolean;

  /**
   * @description 切换界面的时候是否删除未关闭的message及notify
   */
  closeMessageOnSwitch: boolean;

  /**
   * @description 切换界面的时候是否取消已经发送但是未响应的http请求。
   */
  removeAllHttpPending: boolean;

} 

/**
 * @description 修改系统配置
 */
export interface IChangeProjectConfig {
  /**
   * @description 需要修改配置的名称
   */
  name: string,

  /**
   * @description 需要修改的值
   */
  value: string | number | boolean
}

/**
 * @description 路由配置
 */
export interface IRoutersConfig{
  /**
   * @description 路由id
   */
  id: number,

  /**
   * @description 路由名称
   */
  name: string,
  
  /**
   * @description 路由
   */
  path: string,

  /**
   * @description 当前路由参数配置
   */
  meta: IRoutersMetaConfig,

  /**
   * @description 路由组件地址
   */
  component: string,
  
  /**
   * @description 子级路由
   */
  children: IRoutersConfig[]
}

/**
 * @description 当前路由参数配置
 */
export interface IRoutersMetaConfig {
  /**
   * @description 路由标题
   */
  title: string,

  /**
   * @description 路由icon
   */
  icon: string,
  
  /**
   * @description 缓存路由
   */
  cache: boolean,

  /**
   * @description 隐藏路由
   */
  hidden: boolean,

  /**
   * @description 外链路由
   */
  outerLink: boolean,

  /**
   * @description 路由过度动画
   */
  transition: RouterTransitionEnum,

  /**
   * @description 路由序号
   */
  serialNumber: number,
}
