<template>
    <el-menu-item v-if="item && item.children.length === 0" :index="item.path">
      <template v-if="!item.meta.outerLink">
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-else>
        <a :href="item.path" target="_blank" rel="noopener noreferrer">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </a>
      </template>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <side-item
        v-for="child in item.children"
        :key="child.id"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu">
      </side-item>
    </el-submenu>
</template>

<script lang="ts">
import { ElSubmenu, ElMenuItem } from 'element-plus'
import { IRoutersConfig } from '@/types/IProjectConfig'
import { useStore } from 'vuex'
import { PropType, computed } from 'vue'
interface Props {
  item: IRoutersConfig;
}
export default {
  name: 'SideItem',
  props: {
    item: {
      type: Object as PropType<IRoutersConfig>,
      required: true
    }
  },
  components: {
    ElSubmenu,
    ElMenuItem
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

<style>
</style>
