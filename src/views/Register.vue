<template>
    <div class="register-container">
        <h1>Регистрация</h1>

        <form @submit.prevent="register">
            <div class="form-group">
                <label>ФИО</label>
                <input v-model="form.full_name" type="text" required />
            </div>

            <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" type="email" required />
            </div>

            <div class="form-group">
                <label>Пароль</label>
                <input v-model="form.password" type="password" required />
            </div>

            <div class="form-group">
                <label>Роль</label>
                <select v-model="form.role" required>
                    <option disabled value="">Выберите роль</option>
                    <option value="студент">Студент</option>
                    <option value="преподаватель">Преподаватель</option>
                </select>
            </div>

            <div v-if="error" class="error">{{ error }}</div>

            <button type="submit">Зарегистрироваться</button>
        </form>

        <p>Уже есть аккаунт? <router-link to="/">Войти</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                full_name: '',
                email: '',
                password: '',
                role: ''
            },
            error: ''
        }
    },
    methods: {
        async register() {
            try {
                this.error = ''
                const response = await axios.post('http://77.110.104.90:8000/api/register/', this.form)

                if (response.status === 201) {
                    alert('Успешная регистрация!')
                    this.$router.push({ name: 'Login' })
                }
            } catch (err) {
                if (err.response?.data) {
                    this.error = Object.values(err.response.data).flat().join(', ')
                } else {
                    this.error = 'Ошибка регистрации'
                }
            }
        }
    }
}
</script>

<style scoped>
.register-container {
    max-width: 500px;
    margin: 60px auto;
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

input,
select {
    padding: 10px;
    font-size: 16px;
}

button {
    background-color: #201F21;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #333;
}

.error {
    color: red;
    font-size: 14px;
}
</style>