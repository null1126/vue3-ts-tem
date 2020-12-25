<template>
  <div>
      <input v-model="inputRef.val" v-bind="$attrs" @blur="verifyInput" type="text">
      <div style="color:red;fontSize:12px" v-if="inputRef.error">{{ inputRef.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted, PropType } from 'vue'
import { emitter } from './XForm.vue'
export enum TRIGGER{
  blur = 'blur',
  change = 'change'
}
export interface InputProp {
  required: boolean;
  message: string;
  trigger: TRIGGER;
  type?: string;
  min?: number;
  max?: number;
  verify?: RegExp;
}
export type InputProps = InputProp[]
export default defineComponent({
  name: 'Form',
  props: {
    modelValue: String,
    ruls: Array as PropType<InputProps>
  },
  setup (props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: val => {
          context.emit('update:modelValue', val)
        }
      }),
      error: false,
      message: ''
    })
    const verifyInput = () => {
      if (props.ruls) {
        const allPassed = props.ruls.every((item) => {
          let passed = true
          inputRef.message = item.message
          // 判空
          if (item.required) {
            passed = (inputRef.val.trim() !== '')
          }
          // 最小长度限制
          if (passed && item.min && typeof inputRef.val === 'string') {
            passed = (inputRef.val.trim().length >= item.min)
            inputRef.message = `输入的字符长度须大于或等于${item.min}`
          }
          // 最大长度限制
          if (passed && item.max && typeof inputRef.val === 'string') {
            passed = (inputRef.val.trim().length <= item.max)
            inputRef.message = `输入的字符长度须小于或等于${item.max}`
          }
          // 自定义正则表达式
          if (passed && item.verify) {
            passed = (item.verify.test(inputRef.val.trim()))
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
    }
    onMounted(() => {
      emitter.emit('form-item-created', verifyInput)
    })
    return {
      inputRef,
      verifyInput
    }
  }
})
</script>
