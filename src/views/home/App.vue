// /* eslint-disable space-before-function-paren */
// <template>
//    <x-form @form-submit='onFormSubmit'>
//      <x-form-item>
//       <label for="Email">邮箱</label>
//       <x-input-item v-model="FormData.Email" :ruls="ruls.Email"></x-input-item>
//      </x-form-item>
//       <x-form-item>
//        <label for="name">姓名</label>
//        <x-input-item v-model="FormData.name" :ruls="ruls.name"></x-input-item>
//       </x-form-item>
//    </x-form>
// </template>

<script lang="ts">
// import { defineComponent, reactive } from 'vue'
// import XForm from './components/XForm.vue'
// import XFormItem from './components/XFormItem.vue'
// import XInputItem, { InputProps, TRIGGER } from './components/XInputItem.vue'
// // 表单接口
// interface IformData {
//   name: string;
//   Email: string;
// }
// // 表单验证接口
// interface Iruls<T> {
//   name: T;
//   Email: T;
// }
// export default defineComponent({
//   name: 'App',
//   components: {
//     XForm,
//     XInputItem,
//     XFormItem
//   },
//   setup () {
//     const FormData = reactive<IformData>({
//       name: '',
//       Email: ''
//     })
//     const ruls: Iruls<InputProps> = {
//       Email: [
//         { required: true, message: '请输入邮箱', trigger: TRIGGER.blur },
//         { required: true, trigger: TRIGGER.blur, verify: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/, message: '请输入正确的邮箱地址' }
//       ],
//       name: [
//         { required: true, min: 2, max: 5, message: '请输入姓名', trigger: TRIGGER.blur },
//         { required: true, trigger: TRIGGER.blur, verify: /^[\u4e00-\u9fa5]{0,}$/, message: '请输入中文字符' }
//       ]
//     }
//     const onFormSubmit = (res: boolean) => {
//       console.log(res)
//     }
//     return {
//       ruls,
//       FormData,
//       onFormSubmit
//     }
//   }
// })
</script>

// <style lang="less">
// </style>
