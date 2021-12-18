<template>
  <el-button type="text" @click="dialogVisible = true">{{ titleText }}</el-button>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    titleText: {
      type: String,
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(false)

    const handleClose = (done: Function) => {
      ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
          done()
        })
        .catch(() => {
          // catch error
        })
    }
    return {
      dialogVisible,
      handleClose
    }
  }
})
</script>
