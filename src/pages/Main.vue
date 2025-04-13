<template>
    <div class="menu-demo">
    <a-menu mode="horizontal" theme="dark" :default-selected-keys="['1']">
      <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
        <div
          :style="{
            width: '150px',
            height: '30px',
          }"
        ><a-typography-text style="color: whitesmoke; font-size: 16pt;">HorizonLMS</a-typography-text></div>
      </a-menu-item>
      <a-button type="primary" @click="handleClick">Open Drawer</a-button>
      <a-drawer :width="340" :visible="visible" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>
      Title
    </template>
    <div>You can customize modal body text by the current situation. This modal will be closed immediately once you
      press the OK button.
    </div>
  </a-drawer>
    </a-menu>
  </div>
</template>
  

<script setup>
import { MenuItem } from '@arco-design/web-vue';
import { ref } from 'vue';

    const visible = ref(false);

    const handleClick = () => {
      visible.value = true;
    };
    const handleOk = () => {
      visible.value = false;
    };
    const handleCancel = () => {
      visible.value = false;
    }

</script>

<style scoped>

.menu-demo {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 20pt;
}

</style>