<template>
  <div id="app">
    <router-view v-if="ISReload" />
    <!-- 系统设置 -->
    <i class="icon-system-fixed el-icon-s-tools" @click="drawer = true"></i>
    <el-drawer
      title="系统设置"
      v-model="drawer"
      size="20%"
      direction="rtl"
    >
      <system-set></system-set>
    </el-drawer>
  </div>
</template>

<script lang='ts'>
import { ElDrawer } from 'element-plus'
import { defineComponent, provide, ref, nextTick } from 'vue'
import SystemSet from './layout/components/SystemSet.vue'
export default defineComponent({
  name: 'App',
  setup () {
    const drawer = ref<boolean>(false)
    const ISReload = ref<boolean>(true)
    const reload = (): void => {
      ISReload.value = false
      console.log('我在刷新~')
      nextTick(() => {
        ISReload.value = true
      })
    }
    // 向下传递方法
    provide('reload', reload)

    return {
      drawer,
      ISReload,
      reload
    }
  },
  components: {
    ElDrawer,
    SystemSet
  }
})
</script>
