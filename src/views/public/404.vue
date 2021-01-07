<template>
  <div class="NoPage">
    <div><img src="@/assets/image/404.gif" alt=""></div>
    <el-button type="primary" @click="$router.back(-1)">我带你回归正道~</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'NoPage',
  components: {
    ElButton
  }
})
</script>

<style lang="less" scoped>
.NoPage{
  text-align: center;
}
</style>
