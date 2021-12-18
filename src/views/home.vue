<template>
  <div>
    <div class="box">
      <el-card class="cardBox" v-for="(item, key) in IQL" :key="key" shadow="always">
        {{ item }}
      </el-card>
    </div>
    <onePro :visible="state.visible" :titleText="titleText" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { IQL } from '../common/global_var'
import onePro from './allPros/onePro.vue'

export default defineComponent({
  name: 'MainView',
  components: {
    onePro
  },
  setup() {
    const state: object = reactive({
      visible: false,
      titleText: '1218'
    })
    return {
      IQL,
      state
    }
  }
})
</script>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .cardBox {
    width: 150px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
