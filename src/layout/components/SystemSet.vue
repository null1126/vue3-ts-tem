/* eslint-disable vue/no-mutating-props */
<template>
  <div class="SystemSet">
    <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-row type="flex" justify="center">
      <el-col class="item-center"><b>主题设置</b></el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">主题颜色</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'themeColor')"
          v-model="appConfig.themeColor"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">菜单背景</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'sideBarBgc')"
          v-model="appConfig.sideBarBgc"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">菜单文字颜色</label>
      </el-col>
     <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'footerBgc')"
          v-model="appConfig.footerBgc"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">菜单子级背景色</label>
      </el-col>
     <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'footerBgc')"
          v-model="appConfig.footerBgc"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">头部背景</label>
      </el-col>
     <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'headerBgc')"
          v-model="appConfig.headerBgc"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">底部背景</label>
      </el-col>
     <el-col class="item-reight" :span="12">
        <el-color-picker
          @change="changeAppConfig($event,'footerBgc')"
          v-model="appConfig.footerBgc"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>

    <!-- 一条华丽的分割线 -->
    <el-divider></el-divider>

    <el-row type="flex" justify="center">
      <el-col class="item-center"><b>显示设置</b></el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">折叠菜单</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-switch
          @change="changeAppConfig($event,'menuFold')"
          v-model="appConfig.menuFold"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">显示Logo</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-switch
          @change="changeAppConfig($event,'showLogo')"
          v-model="appConfig.showLogo"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">显示底部</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-switch
          @change="changeAppConfig($event,'showFooter')"
          v-model="appConfig.showFooter"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for="">固定头部</label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <el-switch
          @change="changeAppConfig($event,'headerFixed')"
          v-model="appConfig.headerFixed"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-col>
    </el-row>

    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { IChangeProjectConfig } from '@/types/IProjectConfig'
import { ElRow, ElCol, ElColorPicker, ElDivider, ElSwitch, ElScrollbar } from 'element-plus'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'SystemSet',
  components: {
    ElRow,
    ElCol,
    ElScrollbar,
    ElDivider,
    ElSwitch,
    ElColorPicker
  },
  setup () {
    const store = useStore()
    // 获取系统配置
    const appConfig = computed(() => {
      return store.state.appConfig.ProjectConfig
    })
    const obj: IChangeProjectConfig = {
      name: '',
      value: ''
    }
    // 改变系统配置
    const changeAppConfig = (e: string, name: string) => {
      console.log(`修改系统配置[${name}]为：${e}`)
      obj.name = name
      obj.value = e
      store.dispatch('appConfig/changeProjectConfig', obj)
    }

    return {
      appConfig,
      changeAppConfig
    }
  }
})
</script>

<style lang="less" scoped>
.el-row {
    margin: 20px 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
