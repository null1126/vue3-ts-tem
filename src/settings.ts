import { IProjectConfig } from '@/types/IProjectConfig'
import { headerTypeEnum, MenuTypeEnum } from '@/enums/index'

const ProjectConfig: IProjectConfig = {
    systemName: '聚云众电商',
    showSettingButton: true,
    grayMode: false,
    colorWeak: false,
    themeColor: '#00FF8C',
    fullContent: false,
    sideBarWidth: 200,
    sideBarBgc: '#fff',
    headerBgc: '#EAF1ED',
    footerBgc: '#E9EFEF',
    showFooter: false,
    showLogo: true,
    headerFixed: true,
    headerSetting: headerTypeEnum.total,
    menuType: MenuTypeEnum.Left,
    menuFold: false,
    timeout: 12000,
    multiTabsSetting: true,
    openKeepAlive: true,
    lockTime: 60,
    showBreadCrumb: true,
    showBreadCrumbIcon: true,
    useErrorHandle: false,
    openRouterTransition: true,
    routerTransition: '',
    openLoginVerify: true,
    listenNetWork: true,
    openPageLoading:true,
    useOpenBackTop: true,
    openNProgress: true,
    canEmbedIFramePage: false,
    closeMessageOnSwitch: true,
    removeAllHttpPending: true
}

export default ProjectConfig
