<template>
    <div class="footerBar" :style="{ 'background-color':appConfig.footerBgc }">
       四川聚云众科技有限公司
    </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'FooterBar',
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

<style lang="less">
.footerBar {
  color: #333;
  text-align: center;
  line-height: 40px;
}
</style>
