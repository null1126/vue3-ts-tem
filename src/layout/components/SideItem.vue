<template>
    <el-menu-item v-if="item && item.children.length === 0" :index="item.path">
      <div>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </div>
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
export default {
  name: 'SideItem',
  props: {
    item: {
      type: Object
    }
  },
  components: {
    ElSubmenu,
    ElMenuItem
  },
  setup () {
    const filterMenu = (item: IRoutersConfig[]) => {
      item.filter((items) => {
        return items.meta.hidden
      })
    }

    return {
      filterMenu
    }
  }
}
</script>

<style>
</style>
