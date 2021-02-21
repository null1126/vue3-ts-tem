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
import { ElMenu, ElScrollbar } from 'element-plus'
import Logo from './Logo.vue'
import SideItem from './SideItem.vue'
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
import { IRoutersConfig } from '@/types/IProjectConfig'
import { RouterTransitionEnum } from '@/enums/index'
import { isLength } from '@/utils/validate'

type IRoutersConfigs = IRoutersConfig[]

export default {
  name: 'SideBar',
  components: {
    Logo,
    ElMenu,
    SideItem,
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
      return appConfig.value.menuFold ? '' : appConfig.value.sideBarWidth + 'px'
    })

    const routerList = reactive<IRoutersConfigs>([
      {
        id: 1,
        name: 'home',
        path: '/home',
        meta: {
          title: '首页',
          icon: 'el-icon-location',
          cache: false,
          hidden: false,
          outerLink: false,
          transition: RouterTransitionEnum.slideLeft,
          serialNumber: 0
        },
        component: '',
        children: []
      },
      {
        id: 10,
        name: 'home11',
        meta: {
          title: '菜单一',
          icon: 'el-icon-location',
          cache: false,
          hidden: false,
          outerLink: false,
          transition: RouterTransitionEnum.slideLeft,
          serialNumber: 0
        },
        path: '/page',
        component: '',
        children: [
          {
            id: 4,
            name: 'page',
            meta: {
              title: '页面一',
              icon: 'el-icon-location',
              cache: false,
              hidden: false,
              outerLink: false,
              transition: RouterTransitionEnum.slideLeft,
              serialNumber: 0
            },
            path: '/page1',
            component: '',
            children: []
          },
          {
            id: 4,
            name: 'page2',
            meta: {
              title: '页面二',
              icon: 'el-icon-location',
              cache: false,
              hidden: false,
              outerLink: false,
              transition: RouterTransitionEnum.slideLeft,
              serialNumber: 0
            },
            path: '/page2',
            component: '',
            children: [
              {
                id: 1,
                name: 'page3',
                path: '/page3',
                meta: {
                  title: '页面三',
                  icon: 'el-icon-location',
                  cache: false,
                  hidden: true,
                  outerLink: false,
                  transition: RouterTransitionEnum.slideLeft,
                  serialNumber: 0
                },
                component: '',
                children: []
              },
              {
                id: 1,
                name: 'page4',
                path: 'http://localhost:8080/home',
                meta: {
                  title: '外链页面',
                  icon: 'el-icon-location',
                  cache: false,
                  hidden: false,
                  outerLink: true,
                  transition: RouterTransitionEnum.slideLeft,
                  serialNumber: 0
                },
                component: '',
                children: []
              }
            ]
          }
        ]
      }
    ])
    /**
     * @description 子路由存在且子路由都隐藏时 删除父路由
     */
    const routerHidden = (data: IRoutersConfigs) => {
      for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].children && isLength(data[i].children)) {
          routerHidden(data[i].children)
          if (!data[i].meta.hidden) data[i].meta.hidden = data[i].children.every((routeChild) => routeChild.meta.hidden)
        }
        if (data[i].meta.hidden) data.splice(i, 1)
      }
      return data
    }

    const routerData = computed(() => {
      return routerHidden(routerList)
    })

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
  // border-right: 1px solid #f5f5f5;
  height: calc(100vh - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
