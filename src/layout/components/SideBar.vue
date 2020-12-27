<template>
  <div class="sideBar" :style="{'width':isSideBarWidth,'background-color':appConfig.sideBarBgc}">
    <logo v-if="appConfig.showLogo"></logo>
    <div class="sideBar-menu">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <!-- <side-bar-item></side-bar-item> -->
        <el-menu
          :unique-opened="appConfig.uniqueOpened"
          class="el-menu-vertical-demo"
          :background-color="appConfig.sideBarBgc"
          :text-color="appConfig.menuTextColor"
          :active-text-color="appConfig.menuActiveTextColor"
          :collapse="appConfig.menuFold"
        >
          <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <template #title>导航三</template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>小小虹</template>
    </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang='ts'>
import { ElMenu, ElScrollbar, ElSubmenu, ElMenuItem, ElMenuItemGroup } from 'element-plus'
import Logo from './Logo.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
// import SideBarItem from './SideBarItem.vue'

export default {
  name: 'SideBar',
  components: {
    Logo,
    ElMenuItem,
    ElSubmenu,
    ElMenu,
    // SideBarItem,
    ElMenuItemGroup,
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

    return {
      appConfig,
      isSideBarWidth
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
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   background-color: chocolate;
// }
</style>
