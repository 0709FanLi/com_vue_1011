<template>
  <div class="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainView',
  setup() {}
})
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
