<template>
  <div class="layout">
    <div class="layout-nav">
      <side-bar></side-bar>
    </div>
    <div class="layout-body">
      <!-- 固定头部 -->
      <div height="60px" v-if="appConfig.headerFixed">
        <header-bar></header-bar>
      </div>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <!-- 不固定头部 撑满整个盒子-->
      <div class="layout-main">
         <!-- 不固定头部 -->
        <header-bar v-if="!appConfig.headerFixed"></header-bar>
        <div style="height:1000px"></div>
      </div>
      </el-scrollbar>
      <footer-bar v-if="appConfig.showFooter"></footer-bar>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { ElScrollbar } from 'element-plus'
import SideBar from './components/SideBar.vue'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Layout',
  components: {
    SideBar,
    HeaderBar,
    ElScrollbar,
    FooterBar
  },
  setup () {
    const store = useStore()
    const html = window.document.getElementsByTagName('html')[0]
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })
    if (appConfig.value.grayMode) html.classList.add('grayMode')
    if (appConfig.value.colorWeak) html.classList.add('colorWeak')

    return {
      appConfig
    }
  }
})
</script>

<style lang="less" scoped>
.layout{
  width: 100%;
  height: 100vh;
  display: flex;
}

.layout-body{
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout-main{
  width: 100%;
  flex: 1;
}

</style>
