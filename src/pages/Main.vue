<template>
    <a-config-provider :locale="ruRU">
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
        <a-modal width="50vw" v-model:visible="visible" @cancel="handleCancel" :on-before-ok="handleBeforeOk" unmountOnClose ok-text="Назад" hide-cancel="True">
            <template #title>
                Регистрация
            </template>
            <div>
                    <a-tabs position="left">
                        <a-tab-pane key="1" title="Директор">
                            <a-form :model="form" :style="{ width: '38vw' }" @submit="handleSubmit" layout="vertical">
                                <a-divider orientation="center">Основное</a-divider>
                                <a-form-item field="ФИО" tooltip="Please enter username" label="ФИО">
                                    <a-input-group>
                                        <a-input :style="{width:'33%'}" placeholder="Фамилия" aria-required="true"/>
                                        <a-input :style="{width:'33%'}" v-model="form.first_name" placeholder="Имя" />
                                        <a-input :style="{width:'33%'}" placeholder="Отчество"/>
                                    </a-input-group>
                                </a-form-item>
                                <a-form-item field="post" label="Логин">
                                    <a-input :style="{width:'320px'}" v-model="form.post" placeholder="Ваш логин" :max-length="32" allow-clear show-word-limit/>
                                </a-form-item>
                                <a-form-item field="birthday" label="Дата рождения">
                                    <a-date-picker style="width: 200px;" placeholder="Выбрать"/>
                                </a-form-item>
                                <a-form-item field="isRead" label="Пароль">
                                    <a-input-password
                                      v-model:visibility="visibility"
                                      placeholder="Пароль"
                                      :style="{width:'200px'}"
                                      :defaultVisibility="false"
                                      allow-clear
                                    />
                                </a-form-item>
                                <a-divider orientation="center">Организация</a-divider>
                                <a-form-item field="org_name" label="Название">
                                    <a-input :style="{width:'320px'}" v-model="form.post" placeholder="Ваш логин" allow-clear />
                                </a-form-item>
                                <a-form-item field="org_name" label="Адрес">
                                    <a-input :style="{width:'320px'}" v-model="form.post" placeholder="Ваш логин" allow-clear />
                                </a-form-item>
                                <a-form-item>
                                    <a-button html-type="submit">Submit</a-button>
                                </a-form-item>
                            </a-form>
  {{ form }}
                        </a-tab-pane>
                        <a-tab-pane key="2" title="Учитель">
                            Content of Tab Panel 2
                        </a-tab-pane>
                        <a-tab-pane key="3" title="Родитель">
                            Content of Tab Panel 3
                        </a-tab-pane>
                        <a-tab-pane key="4" title="Ученик">
                            <student-form></student-form>
                        </a-tab-pane>
                    </a-tabs>

            </div>
        </a-modal>
    </div>
    <Layout class="layout-demo">
        <LayoutContent class="" style="height: 100%">
            <a-row :align="center">
                <a-col :span="6" :offset="2">
                    <a-card>
                        <a-typography-title :heading="4" type="primary">
                            Аналитика
                        </a-typography-title>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 6a1 1 0 011 1v31h35a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h2zm34.527 6.707l1.414 1.414a1 1 0 010 1.415L31.627 26.849a1 1 0 01-1.414 0L28.8 25.435l-.006-.006-5.65-5.65-10.607 10.606a1 1 0 01-1.415 0L9.707 28.97a1 1 0 010-1.415L21.013 16.25l.008-.007.802-.801.612-.614a.996.996 0 01.53-.277l.118-.014h.118c.236.014.468.111.648.291l1.415 1.415h.001l5.656 5.657 9.192-9.193a1 1 0 011.414 0z" fill="currentColor"/></svg>
                        <a-typography-paragraph class="features">
                            Больше не нужно тратить часы на то, чтобы проанализировать успеваемость учеников, с нашими продвинутыми инструментами вы сможете делать это по одному нажатию мыши
                        </a-typography-paragraph>
                    </a-card>
                </a-col>
                <a-col :span="6" :offset="1">
                    <a-card>
                        <a-typography-title :heading="4" type="primary">
                            Управление
                        </a-typography-title>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.767 2.71A21.685 21.685 0 0024 2.182c-1.618 0-3.215.178-4.768.528l-.897.202-2.795 6.373-6.883-.752-.622.677a21.82 21.82 0 00-4.772 8.295l-.27.872L7.089 24 3.53 28.886l-.537.737.27.872a21.82 21.82 0 004.772 8.295l.622.677 6.883-.752 2.426 5.531.369.842.896.202c1.554.35 3.15.528 4.769.528 1.618 0 3.214-.178 4.767-.528l.897-.201 2.796-6.374 6.883.752.622-.677a21.82 21.82 0 004.771-8.294l.27-.871L40.912 24l3.559-4.887.537-.738-.27-.87a21.82 21.82 0 00-4.772-8.295l-.622-.677-6.883.752-2.796-6.373-.897-.202zM20.916 6.08A18.109 18.109 0 0124 5.818c1.043 0 2.073.089 3.084.263l2.24 5.109a2.976 2.976 0 003.05 1.763l5.507-.603a18.182 18.182 0 013.096 5.382l-3.289 4.516a2.976 2.976 0 000 3.504l3.289 4.516a18.182 18.182 0 01-3.096 5.382l-5.508-.603a2.976 2.976 0 00-3.049 1.763l-2.24 5.109c-1.011.174-2.041.263-3.084.263-1.043 0-2.073-.089-3.084-.263l-2.24-5.108a2.976 2.976 0 00-3.05-1.764l-5.508.603a18.185 18.185 0 01-3.095-5.383l3.289-4.515c.76-1.044.76-2.46 0-3.504l-3.29-4.515a18.186 18.186 0 013.096-5.383l5.509.603a2.976 2.976 0 003.049-1.763l2.24-5.109zM24 14.91c5.004 0 9.056 4.072 9.056 9.091 0 5.019-4.052 9.09-9.056 9.09S14.944 29.02 14.944 24s4.052-9.09 9.056-9.09zM18.58 24c0-3.014 2.429-5.454 5.42-5.454s5.42 2.44 5.42 5.454-2.429 5.455-5.42 5.455-5.42-2.44-5.42-5.455z" fill="currentColor"/></svg>
                    </a-card>
                </a-col>
                <a-col :span="6" :offset="1">
                    <a-card>
                        <a-typography-title :heading="4" type="primary">
                            Автоматизация
                        </a-typography-title>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.172 12H40v28H9V24H5v18a2 2 0 002 2h35a2 2 0 002-2V10a2 2 0 00-2-2H11.172l2.95-2.95a1 1 0 000-1.414l-1.415-1.414a1 1 0 00-1.414 0l-7.071 7.07a1 1 0 000 1.415l7.07 7.071a1 1 0 001.415 0l1.414-1.414a1 1 0 000-1.414L11.171 12z" fill="currentColor"/></svg>
                    </a-card>
                </a-col>
            </a-row>
        </LayoutContent>
    </Layout>
</a-config-provider>
</template>
  

<script>
import { reactive } from 'vue';
import { ref } from 'vue';
import ruRU from '@arco-design/web-vue/es/locale/lang/ru-ru';
import StudentForm from '@/components/StudentForm.vue';

export default {
  setup() {
    const form = reactive({
      name: '',
      post: '',
      first_name: '',
      isRead: false,
    })
    const visible = ref(false);

    const handleClick = () => {
      visible.value = true;
    };
    const handleBeforeOk = async () => {
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
      StudentForm,
      form,
      ruRU
    }
  },
}
</script>
<style scoped>
.test2 {
    height: 400px;
    
}
svg {
    margin: 5%;
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

.features {
    text-align: left;
    margin: 5% 10% 10% 10%;
}
</style>