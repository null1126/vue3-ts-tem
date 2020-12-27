<template>
  <!-- 头部导航 -->
  <div class="headerBar box-x-sb" :style="{ backgroundColor: appConfig.headerBgc }">
    <div class="headerBar-left">
      <i :class="icons" @click="changeAppConfig(!appConfig.menuFold, 'menuFold')"></i>
    </div>
    <div class="headerBar-reight box-x-end">
      <i class="icon-ali icon-quanping" @click="handleFullScreen"></i>
      <i class="icon-ali icon-shuaxin" @click="handleReload"></i>
      <el-image
        class="head-img"
        src="https://static.ixiupet.com/uploads/allimg/160309/11-160309135341.jpg">
      </el-image>
    <span>小张同学</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { ElImage } from 'element-plus'
import { computed, inject } from 'vue'
import { useStore } from 'vuex'
import { fullScreen, useChangeAppConfig } from '@/hooks/useSystemSet'

export default {
  name: 'Header',
  // inject: ['reload'],
  components: {
    ElImage
  },
  setup () {
    const store = useStore()
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })
    // 全屏显示
    const handleFullScreen = () => fullScreen()
    // 刷新
    const reloads = inject<Function>('reload')
    const handleReload = () => reloads && reloads()

    const changeAppConfig = (e: string, name: string) => useChangeAppConfig(e, name)

    const icons = computed(() => {
      if (appConfig.value.menuFold) {
        return 'icon-ali icon-zhedie'
      } else {
        return 'icon-ali icon-shouqi'
      }
    })

    return {
      appConfig,
      icons,
      handleReload,
      changeAppConfig,
      handleFullScreen
    }
  }
}
</script>

<style lang="less">
.headerBar {
  width: 100%;
  height: 60px;
  padding: 0 20px;
}
.user-info {
  height: 60px;
  line-height: 100%;
}
.head-img {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
}
.el-icon-rank,
.el-icon-refresh,
.icon-shuaxin,
.icon-quanping{
  font-size: 30px;
}

</style>
