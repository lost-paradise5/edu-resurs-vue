<template>
    <section class="login">
        <div class="login__wrapper">
            <div class="login__sign-in" :style="{ background: backgroundImage }">
                <div class="login__title-wrap">
                    <h1 class="login__title">Рады тебя видеть снова!</h1>
                </div>
                <form class="login__form" @submit.prevent="onSubmit">
                    <div class="login__username">
                        <label class="login__title-form">Почта</label>
                        <input type="email" v-model="form.email" class="login__input login__input--username"
                            placeholder="Email" required />
                    </div>
                    <div class="login__password">
                        <label class="login__title-form">Пароль</label>
                        <input type="password" v-model="form.password" class="login__input login__input--password"
                            placeholder="Пароль" required />
                    </div>
                    <div class="login__forgot">
                        <div class="login__remember-me">
                            <label class="checkbox">
                                <input type="checkbox" v-model="rememberMe" />
                                <span class="checkbox__custom"></span>
                                <span class="login__text">Запомнить меня</span>
                            </label>
                        </div>
                        <div class="login__forgot-password">
                            <button type="button" class="login__btn login__btn--forgot-password">
                                Забыл пароль?
                            </button>
                        </div>
                    </div>
                    <div v-if="error" class="error">{{ error }}</div>
                    <div class="login__button">
                        <button type="submit" class="login__btn login__btn--signIn">Вход</button>
                    </div>
                </form>
                <div class="login__registration">
                    <span class="login__text">Нет аккаунта?</span>
                    <router-link to="/register" class="login__btn login__btn--registration">нажимай сюда</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import bg from '@/assets/image/forLogin.jpg'
import axios from 'axios'

export default {
    data() {
        return {
            backgroundImage: bg,
            form: {
                email: '',
                password: ''
            },
            error: '',
            rememberMe: false
        }
    },
    methods: {
        async onSubmit() {
            this.error = ''
            try {
                const response = await axios.post('http://77.110.104.90:8000/api/login/', this.form)
                const { access, role } = response.data
                localStorage.setItem('userId', response.data.id)
                localStorage.setItem('token', access)
                localStorage.setItem('userRole', role)

                this.$router.push('/main')
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    this.error = 'Некорректные данные'
                } else {
                    this.error = 'Ошибка соединения с сервером'
                }
                console.error(err)
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: #ff4d4f;
    margin-bottom: 10px;
    text-align: center;
}

.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.login__wrapper {
    animation: fadeInUp 0.6s ease;

    display: flex;
    align-items: center;
}

.login__background {
    width: 600px;
}

.login__bg {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}

.login__sign-in {

    background-image: url('@/assets/image/forLogin.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 15px;
    padding: 20px;
    background-color: #E5EDF3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
}

.login__sign-in::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
}

.login__sign-in>* {
    position: relative;
    z-index: 1;
}

.login__title-wrap {
    margin: 15px 0;
}

.login__title {
    color: #F9F9F9;
    font-family: var(--secondary-font);
    font-size: 34px;
}

.login__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.login__title-form {
    font-family: var(--main-font);
    font-size: 16px;
    color: #F9F9F9;
}

.login__username,
.login__password {
    display: flex;
    flex-direction: column;
    gap: 5px;

}

.login__input {
    width: 100%;
    font-family: var(--main-font);
    font-size: 16px;
    background-color: #F9F9F9;
    padding: 15px;
}

.login__input:focus {
    outline: none;
    border-color: #201F21;
    background-color: #fff;
}

.login__input--username {}

.login__input--password {}

.login__forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__remember-me {
    font-family: var(--main-font);
    display: flex;
    gap: 5px;
}

.login__text {
    color: #F9F9F9;
    font-family: var(--main-font);
    font-size: 14px;

}

.login__forgot-password {}

.login__btn {
    color: #F9F9F9;
    font-family: var(--secondary-font);
}

.login__btn--signIn {
    background-color: #201F21;
    color: #fff;
    padding: 12px;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
}

.login__btn--signIn:hover {
    background-color: #F9F9F9;
    color: #201F21;
}

.login__btn--forgot-password {
    color: #F9F9F9;
    font-family: var(--main-font);
    font-size: 14px;
}

.login__button {}

.login__registration {
    width: 100%;
    display: flex;
    gap: 5px;

}

.login__btn--registration {
    color: #F9F9F9;
    font-family: var(--main-font);
    font-size: 14px;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>