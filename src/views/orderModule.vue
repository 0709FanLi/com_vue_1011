<template>
  <h2>{{ nowTime }}</h2>
  <div><el-button type="primary" @click="getNowTime">显示时间</el-button></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { nowTime, getNowTime } from '@/common/nowTime'

export default defineComponent({
  name: 'nowTime',
  setup() {
    return {
      nowTime,
      getNowTime
    }
  }
})
</script>
