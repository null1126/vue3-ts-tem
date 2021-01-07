<template>
  <div class="sideBar" :style="{'background-color':appConfig.sideBarBgc}">
    <logo v-show="appConfig.showLogo"></logo>
    <div class="sideBar-menu">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          class="el-menu-vertical-demo"
          :background-color="appConfig.sideBarBgc"
          :text-color="appConfig.menuTextColor"
          :active-text-color="appConfig.menuActiveTextColor"
          :collapse="appConfig.menuFold"
          router="true"
          >
          <side-item v-for="route in routerData" :key="route.id" :item="route" :base-path="route.path"></side-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang='ts'>
import { ElMenu, ElScrollbar, ElSubmenu } from 'element-plus'
import Logo from './Logo.vue'
import SideItem from './SideItem.vue'
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
import { IRoutersConfig } from '@/types/IProjectConfig'
type IRoutersConfigs = IRoutersConfig[]

export default {
  name: 'SideBar',
  components: {
    Logo,
    ElMenu,
    SideItem,
    ElSubmenu,
    ElScrollbar
  },
  setup () {
    const store = useStore()
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })

    // 是否需要给菜单设置宽度
    const isSideBarWidth = computed(() => {
      if (appConfig.value.menuFold) {
        return ''
      } else {
        return appConfig.value.sideBarWidth + 'px'
      }
    })

    const routerData: IRoutersConfigs = reactive([
      {
        id: 1,
        name: 'home',
        icon: 'el-icon-location',
        title: '首页',
        path: '/home',
        num: 1,
        childList: [
          {
            id: 4,
            name: 'home',
            icon: 'el-icon-location',
            title: '首页',
            path: '/home',
            num: 1,
            childList: []
          },
          {
            id: 10,
            name: 'home',
            icon: 'el-icon-location',
            title: '导航3',
            path: '/home20',
            num: 1,
            childList: []
          }
        ]
      },
      {
        id: 2,
        name: 'home1',
        icon: 'el-icon-location',
        title: '导航4',
        path: '/home5',
        num: 1,
        childList: [
          {
            id: 3,
            name: 'home',
            icon: 'el-icon-location',
            title: '导航5',
            path: '/home3',
            num: 1,
            childList: []
          }
        ]
      },
      {
        id: 10,
        name: 'home11',
        icon: 'el-icon-location',
        title: '导航4',
        path: '/home51',
        num: 1,
        childList: []
      }
    ])

    return {
      appConfig,
      isSideBarWidth,
      routerData
    }
  }
}
</script>

<style lang='less'>
.sideBar {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-menu {
  border-right: none !important;
}
.sideBar-menu {
  flex: 1;
  border-right: 1px solid #f5f5f5;
  height: calc(100vh - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
