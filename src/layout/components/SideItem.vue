<template>
    <el-menu-item v-if="item && item.childList.length === 0" :index="item.path">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </el-menu-item>

    <el-submenu v-else :index="item.path">
      <template #title>
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <side-item
        v-for="child in item.childList"
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
  }
}
</script>

<style>
</style>
