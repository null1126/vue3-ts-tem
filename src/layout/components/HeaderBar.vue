<template>
  <!-- 头部导航 -->
  <div class="headerBar" :style="{ backgroundColor: appConfig.headerBgc }">
    <el-image
      class="head-img"
      src="https://static.ixiupet.com/uploads/allimg/160309/11-160309135341.jpg">
    </el-image>
    <span>小张同学</span>
  </div>
</template>

<script lang='ts'>
import { ElImage } from 'element-plus'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Header',
  components: {
    ElImage
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
}
</script>

<style lang="less">
.headerBar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
</style>
