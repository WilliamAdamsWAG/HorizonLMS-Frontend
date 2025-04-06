<template>
    <div :style="{ background: 'var(--color-fill-2)', padding: '2%' }" >
        <a-page-header
          :style="{ background: 'var(--color-bg-2)' }"
          title="HorizonLMS"
          subtitle="Новый горизонт знаний"
          :show-back="false"
        >
            <template #extra>
                <a-space>
                    <a-button type="primary" @click="handleClick">Зарегистрироваться</a-button>
                    <a-button type="outline">войти</a-button>
                </a-space>
            </template>
        </a-page-header>
        <a-modal width="70vw" v-model:visible="visible" @cancel="handleCancel" :on-before-ok="handleBeforeOk" unmountOnClose>
            <template #title>
                Title
            </template>
            <div>
                <a-card title="test">test</a-card>
            </div>
            <a-steps :current="2">
                <a-step description="This is a description">Succeeded</a-step>
                <a-step description="This is a description">Processing</a-step>
                <a-step description="This is a description">Pending</a-step>
            </a-steps>
        </a-modal>
    </div>
    <Layout class="layout-demo">
        <LayoutContent class="" style="height: 400px;">
            <template>
                test
            </template>
        </LayoutContent>
    </Layout>
    <template>
  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '360px' }" title="Arco Card">
      <template #extra>
        <a-link>More</a-link>
      </template>
      ByteDance's core product, Toutiao ("Headlines"), is a content platform in
      China and around the world. Toutiao started out as a news recommendation
      engine and gradually evolved into a platform delivering content in various
      formats.
    </a-card>
  </div>
</template>

</template>
  

<script>
import RoleCard from '@/components/RoleCard.vue';
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);

    const handleClick = () => {
      visible.value = true;
    };
    const handleBeforeOk = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      return true;
      // prevent close
      // return false;
    };
    const handleCancel = () => {
      visible.value = false;
    }

    return {
      visible,
      handleClick,
      handleBeforeOk,
      handleCancel,
      RoleCard
    }
  },
}
</script>
<style scoped>
.test2 {
    height: 400px;
    
}
.layout-demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
  background-color: rgb(242, 243, 245);
}
</style>