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
import { defineComponent } from 'vue'
import SystemSet from './layout/components/SystemSet.vue'
export default defineComponent({
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      ISReload: true,
      drawer: false
    }
  },
  components: {
    ElDrawer,
    SystemSet
  },
  methods: {
    reload () {
      this.ISReload = false
      this.$nextTick(() => {
        this.ISReload = true
      })
    }
  }
})
</script>
