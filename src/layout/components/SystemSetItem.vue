<template>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <label for=""><slot name="key"></slot></label>
      </el-col>
      <el-col class="item-reight" :span="12">
        <slot name="value"></slot>
      </el-col>
    </el-row>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ElRow, ElCol } from 'element-plus'

export default defineComponent({
  name: 'SystemSetItem',
  components: {
    ElRow,
    ElCol
  }
})
</script>

<style lang="less" scoped>
.el-row {
    margin: 15px 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
// .el-row:last-child{
//   padding-bottom: 40px;
// }
</style>
