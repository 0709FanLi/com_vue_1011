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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'orderCom',
  setup() {
    const girls = ref(['aaa', 'bbb', 'ccc'])
    const selectGirl = ref('')
    function selectGirlFunc(key: number): void {
      selectGirl.value = girls.value[key]
    }
    return {
      girls,
      selectGirlFunc,
      selectGirl
    }
  }
})
</script>
