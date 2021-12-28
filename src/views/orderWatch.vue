<template>
  <div>
    <h2>欢迎关林红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div style="margin-top: 15px">
    <el-button
      v-for="(item, key) in girls"
      :key="key"
      @click="selectGirlFunc(key)"
      type="primary"
      >{{ item }}</el-button
    >
  </div>
  <h3>你选择了{{ selectGirl }}</h3>
  <div><el-button type="primary" @click="overAction">点餐完毕</el-button></div>
  <div>{{ overText }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from 'vue'

export default defineComponent({
  name: 'orderCom',
  setup() {
    interface dataProps {
      girls: string[]
      selectGirl: string
      // eslint-disable-next-line no-unused-vars
      selectGirlFunc: (key: number) => void
    }
    const data: dataProps = reactive({
      girls: ['aaa', 'bbb', 'ccc'],
      selectGirl: 'aaa',
      selectGirlFunc(key: number): void {
        data.selectGirl = data.girls[key]
      }
    })
    const state = toRefs(data)
    const overText = ref<string>('红浪漫')
    const overAction = () => {
      overText.value += '点餐完成！'
      document.title = overText.value
    }
    overText.value = 'sss'
    watch(overText, (overTextVal, prev) => {
      console.log(overTextVal, prev)
    })
    return {
      ...state,
      overText,
      overAction
    }
  }
})
</script>
