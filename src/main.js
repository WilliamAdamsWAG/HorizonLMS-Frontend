import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from "./App.vue"
import router from './router/router'
import '@arco-design/web-vue/dist/arco.css';
import StudentForm from './components/StudentForm.vue';

const app = createApp(App)

app.use(ArcoVue)

app.component('student-form', StudentForm)

app.mount('#app')
