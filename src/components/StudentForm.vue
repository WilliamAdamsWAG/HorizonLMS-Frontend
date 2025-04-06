<template>
    <div>
    <a-form :model="form" :style="{ width: '100%' }" @submit="handleSubmit" layout="vertical">
        <a-divider orientation="center">Основное</a-divider>

        <a-form-item field="ФИО" tooltip="Please enter username" label="ФИО">
            <a-input-group>
                <a-input class="name_input" v-model="form.middle_name" placeholder="Фамилия" aria-required="true"/>
                <a-input class="name_input" v-model="form.first_name" placeholder="Имя" />
                <a-input class="name_input" v-model="form.last_name" placeholder="Отчество"/>
            </a-input-group>
        </a-form-item>

        <a-form-item field="post" label="Логин">
            <a-input class="username_input" v-model="form.username" placeholder="Ваш логин" :max-length="32" allow-clear show-word-limit/>
        </a-form-item>

        <a-form-item field="birthday" label="Дата рождения">
            <a-date-picker class="birthday_input" v-model="form.birthday" placeholder="Выбрать"/>
        </a-form-item>

        <a-form-item field="isRead" label="Пароль">
            <a-input-password
              v-model:visibility="visibility"
              v-model="form.password"
              placeholder="Пароль"
              class="password_input"
              :defaultVisibility="false"
              allow-clear
            />
        </a-form-item>

        <a-divider orientation="center">Школа</a-divider>

        <a-form-item field="section" label="Школа">
            <a-select v-model="form.school" placeholder="Выберете школу" allow-clear>
                <a-option value="school_3">МОУ Беломорская СОШ 3</a-option>
                <a-option value="school_1">МОУ Беломорская СОШ 1</a-option>
            </a-select>
        </a-form-item>

        <a-form-item>
                                    <a-button html-type="submit">Submit</a-button>
                                </a-form-item>
    </a-form></div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const form = reactive({
            first_name: '',
            middle_name: '',
            last_name: '',
            username: '',
            birthday: '',
            password: '',
            school: '',
        })

        const handleSubmit = async () => {
            axios.post(`http://localhost:8090/user/create?username=${form.username}&organization_id=1&password=${form.password}&first_name=${form.first_name}&middle_name=${form.middle_name}&last_name=${form.last_name}`)
            .then(function (response) {
                console.log(response);
             })
        };

        return {
            form,
            handleSubmit
        }
    }
}
</script>

<style scoped>

.name_input {
    width: 33%;
}

.username_input {
    width: 66%;
}

.birthday_input {
    width: 66%
}

.password_input {
    width: 66%
}

</style>
