<template>
  <div class="Logo" :style="{ backgroundColor: appConfig.sideBarBgc }">
    <!-- <el-image
      class="logo-img"
      src="https://static.ixiupet.com/uploads/allimg/160309/11-160309135341.jpg"
    ></el-image> -->
    <i class="icon-ali icon-9"></i>
    <span v-if="!appConfig.menuFold">{{ appConfig.systemName }}</span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
// import { ElImage } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    // ElImage
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
.Logo {
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #545c64;
}
.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.icon-9{
  font-size: 30px;
  color: rgb(255, 72, 0);
}
</style>
