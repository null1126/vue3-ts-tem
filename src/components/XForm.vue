<template>
  <form>
   <slot name='default'></slot>
   <div @click.prevent="submitForm">
     <slot name="submit">
       <button>提交</button>
     </slot>
   </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export interface InputProp {
  val: string;
  message: string;
}
type ValidateFunc = () => boolean
export type InputProps = InputProp[]
export default defineComponent({
  name: 'Form',
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funcArr.push(func)
      }
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
