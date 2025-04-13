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
      <a-button type="primary" @click="handleClick" style="position: absolute; right: 5%;background-color: #00B2FF;">☰</a-button>
      <a-drawer :width="340" :visible="visible" :hide-cancel="true" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>
      Title
    </template>
    <div>
        <div class="grid-demo-background">
    <a-space direction="vertical" :size="16" style="display: block;">
      <a-row class="grid-demo">
        <a-col :span="24" :style="{ padding: '12px' }">
                <a-button type="primary" style="height: 7vh; width: 100%;">
      <template #icon>
        <icon-delete />
      </template>
      <!-- Use the default slot to avoid extra spaces -->
      <template #default>Delete</template>
    </a-button>
        </a-col>
      </a-row>
      </a-space></div>
    </div>
    <icon-list />
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