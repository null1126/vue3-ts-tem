<template>
  <div class="layout">
    <div class="layout-nav">
      <side-bar />
    </div>
    <!-- 固定头部 -->
    <div class="layout-body" v-if="appConfig.headerFixed">
      <header-bar></header-bar>
      <div class="layout-main">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <div style="height:1000px">
            都给老子哭
          </div>
        </el-scrollbar>
      </div>
      <!-- <footer-bar v-if="showFooter"></footer-bar> -->
    </div>
    <!-- 不固定头部 -->
    <div class="layout-body" v-else>
      <div class="layout-main" :class="{'headerFixed':!appConfig.headerFixed}">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <header-bar></header-bar>
          <div style="height:1000px">
            都给老子哭
          </div>
        </el-scrollbar>
      </div>
      <!-- <footer-bar v-if="showFooter"></footer-bar> -->
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
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })

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
  height: 100vh;
  flex: 1;
}

.layout-main{
  width: 100%;
  height: calc(100vh - 60px);
}

.headerFixed{
  height: 100vh;
}

.showFooter{
  height: calc(100vh - 100px);
}
</style>
