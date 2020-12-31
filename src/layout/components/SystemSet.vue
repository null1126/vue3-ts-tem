/* eslint-disable vue/no-mutating-props */
<template>
  <div class="SystemSet">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-row type="flex" justify="center">
        <el-col class="item-center"><b>主题设置</b></el-col>
      </el-row>

      <system-set-item>
        <template #key>
          布局样式
        </template>
        <template #value>
          <i class="icon-ali icon-baocunbuju"></i>
          <i class="icon-ali icon-buju"></i>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          主题颜色
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'themeColor')"
          v-model="appConfig.themeColor"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          菜单背景
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'sideBarBgc')"
          v-model="appConfig.sideBarBgc"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          菜单文字颜色
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'menuTextColor')"
          v-model="appConfig.menuTextColor"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          菜单激活文字颜色
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'menuActiveTextColor')"
          v-model="appConfig.menuActiveTextColor"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          菜单子级背景色
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'footerBgc')"
          v-model="appConfig.footerBgc"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          头部背景
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'headerBgc')"
          v-model="appConfig.headerBgc"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

      <system-set-item>
        <template #key>
          底部背景
        </template>
        <template #value>
          <el-color-picker
          @change="changeAppConfig($event,'footerBgc')"
          v-model="appConfig.footerBgc"
          size="mini">
          </el-color-picker>
        </template>
      </system-set-item>

    <!-- 一条华丽的分割线 -->
    <el-divider></el-divider>

    <el-row type="flex" justify="center">
      <el-col class="item-center"><b>显示设置</b></el-col>
    </el-row>

    <system-set-item>
      <template #key>
        灰色模式
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'grayMode')"
        v-model="appConfig.grayMode"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>

    <system-set-item>
      <template #key>
        色弱模式
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'colorWeak')"
        v-model="appConfig.colorWeak"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>

    <system-set-item>
      <template #key>
        显示Logo
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'showLogo')"
        v-model="appConfig.showLogo"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>

    <system-set-item>
      <template #key>
        显示底部
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'showFooter')"
        v-model="appConfig.showFooter"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>

    <system-set-item>
      <template #key>
        固定头部
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'headerFixed')"
        v-model="appConfig.headerFixed"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>

    <system-set-item>
      <template #key>
        只打开一个子菜单
      </template>
      <template #value>
        <el-switch
        @change="changeAppConfig($event,'uniqueOpened')"
        v-model="appConfig.uniqueOpened"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
      </template>
    </system-set-item>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { ElRow, ElCol, ElColorPicker, ElDivider, ElSwitch, ElScrollbar } from 'element-plus'
import SystemSetItem from './SystemSetItem.vue'
import { useChangeAppConfig } from '@/hooks/useSystemSet'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SystemSet',
  components: {
    ElRow,
    ElCol,
    ElScrollbar,
    ElDivider,
    ElSwitch,
    ElColorPicker,
    SystemSetItem
  },
  setup () {
    const store = useStore()
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })
    // 改变系统配置
    const changeAppConfig = (e: string, name: string) => useChangeAppConfig(e, name)

    return {
      appConfig,
      changeAppConfig
    }
  }
})
</script>

<style lang="less" scoped>
.SystemSet{
  height: 100vh;
  padding-bottom: 40px;
}
.el-row {
    margin: 0 15px 20px 15px;
    &:last-child {
      padding-bottom: 40px;
    }
  }
.icon-buju{
  font-size: 21px;
}
</style>
