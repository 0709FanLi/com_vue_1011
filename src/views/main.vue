<template>
  <div>
    <div class="box">
      <el-card
        style="width: 150px; margin-right: 20px"
        v-for="(item, key) in probs"
        :key="key"
        shadow="always"
      >
        {{ item }}
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'MainView',
  setup() {
    const probs: string[] = reactive(['s', 'k'])
    console.log(probs)
    return {
      probs
    }
  }
})
</script>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
