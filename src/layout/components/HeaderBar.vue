<template>
  <!-- 头部导航 -->
  <div class="headerBar box-x-sb" :style="{ backgroundColor: appConfig.headerBgc }">
    <div class="headerBar-left">
      <i :class="icons" @click="changeAppConfig(!appConfig.menuFold, 'menuFold')"></i>
    </div>
    <div class="headerBar-reight box-x-end">
      <el-tooltip effect="dark" placement="bottom">
        <template #content>菜单搜索</template>
        <i class="icon-ali icon-sousuo" @click="handleFullScreen"></i>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>锁定屏幕</template>
        <i class="icon-ali icon-suo" @click="handleReload"></i>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>消息通知</template>
        <el-badge is-dot>
          <i class="icon-ali icon-xiaoxi" @click="handleReload"></i>
        </el-badge>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>更换主题</template>
        <i class="icon-ali icon-zhuti" @click="handleFullScreen"></i>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>源码地址</template>
        <i class="icon-ali icon-github" @click="handleReload"></i>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>全屏显示</template>
        <i class="icon-ali icon-quanping" @click="handleFullScreen"></i>
      </el-tooltip>
      <el-tooltip effect="dark" placement="bottom">
        <template #content>刷新</template>
        <i class="icon-ali icon-shuaxin" @click="handleReload"></i>
      </el-tooltip>
      <i class="icon-ali icon-zhongwenyuyan" :class="{'active':appConfig.language === 'cn'}" @click="changeAppConfig('cn', 'language')"></i>/
      <i class="icon-ali icon-yingwenyuyan" :class="{'active':appConfig.language === 'en'}" @click="changeAppConfig('en', 'language')"></i>
      <el-image
        class="head-img"
        src="https://static.ixiupet.com/uploads/allimg/160309/11-160309135341.jpg">
      </el-image>
    <span>小张同学</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { ElImage, ElTooltip, ElBadge } from 'element-plus'
import { computed, inject } from 'vue'
import { useStore } from 'vuex'
import { fullScreen, useChangeAppConfig } from '@/hooks/useSystemSet'

export default {
  name: 'Header',
  components: {
    ElImage,
    ElBadge,
    ElTooltip
  },
  setup () {
    const store = useStore()
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
  width: 40px;
  height: 40px;
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
