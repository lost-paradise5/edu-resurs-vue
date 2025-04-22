<template>
    <section class="registration">
        <div class="registration__wrapper">
            <div class="registration__background">
                <div class="registration__title-wrap">
                    <h1 class="registration__title">
                        Добро Пожаловать на Образовательный ресурс БГУ!
                    </h1>
                </div>
                <img :src="backgroundImage" alt="" class="registration__bg">
            </div>
            <form @submit.prevent="register" class="registration__form">
                <div class="registration__form-title-wrap">
                    <h1 class="registration__form-title">
                        Регистрация
                    </h1>
                </div>
                <div class="registration__input-wrap registration__input-wrap--fullname">
                    <label class="registration__label registration__label--fullname">Заполните свое ФИО</label>
                    <input type="text" class="registration__input registration__input--fullname" v-model="form.fullname"
                        placeholder="Full Name">
                </div>
                <div class="registration__input-wrap registration__input-wrap--username">
                    <label class="registration__label registration__label--username">Введите свою почту</label>
                    <input type="text" class="registration__input registration__input--username" v-model="form.username"
                        placeholder="Email">
                </div>
                <div class="registration__input-wrap registration__input-wrap--password">
                    <div class="registration__input-wrap">
                        <label class="registration__label registration__label--password">Пароль</label>
                        <input type="password" class="registration__input registration__input--password"
                            v-model="form.password" placeholder="Password">
                    </div>
                    <div class="registration__input-wrap">
                        <label
                            class="registration__label registration__label--password registration__label--confirm-password">Подтвердите
                            пароль</label >
                        <input type="password" class="registration__input registration__input--password"
                            placeholder="Password" v-model="confirmPassword">
                    </div>
                </div>
                <div class="registration__input-wrap registration__input-wrap--role">
                    <label class="registration__label registration__label--role">Выберите роль:</label>
                    <select v-model="form.role" class="registration__select">
                        <option disabled selected value="">Выберите роль</option>
                        <option v-for="(label, value) in option" :key="value" :value="value"
                            class="registration__option">{{ label }}</option>
                    </select>
                </div>
                <div class="registration__input-wrap registration__input-wrap--comfirm">
                    <label class="checkbox">
                        <input type="checkbox" />
                        <span class="checkbox__custom"></span>
                    </label>
                    <span class="registration__label">Я согласен с условиями использования</span>
                    <!-- <input type="checkbox" class="registration__input-checkbox">
                    <label class="registration__label">Я согласен с условиями использования</label> -->
                </div>
                <div class="registration__button">
                    <button class="registration__btn registration__btn--save">Создать аккаунт</button>
                </div>
            </form>
        </div>
    </section>
    <Notification v-if="message" :message="message" :type="type"  />
</template>

<script>
import { useNotification } from '@/composables/useNotification';
import Notification from '@/components/Notification.vue';
import api from '@/api/axios'
import bg from '@/assets/image/forRegistration.jpg'
export default {
    setup() {
        const { message, type, showNotification } = useNotification();
        return { message, type, showNotification };
    },
    components: {
        Notification
    },
    data() {
        return {
            backgroundImage: bg,
            form: {
                full_name: '',
                email: '',
                password: '',
                role: ''
            },
            confirmPassword: '',
            option: {
                student: 'Студент',
                teacher: 'Преподаватель'
            }
        }
    },
    methods: {
        async register() {
            if (this.passwordMismatch) {
                this.showNotification('Пароли не совпадают', 'error');
                return;
            }
            try {
                const response = await api.post('register/',
                    this.form
                )

                if (response.status === 201) {
                    this.showNotification('Успешная регистрация!', 'success');
                    this.$router.push({ name: 'Login' });
                }
            } catch (err) {
                if (err.response?.data) {
                    const errorMsg = Object.values(err.response.data).flat().join(', ');
                    this.error = errorMsg;
                    this.showNotification(errorMsg, 'error');
                } else {
                    this.showNotification('Ошибка регистрации', 'error');
                }
            }
        },
    },
    computed: {
        passwordMismatch() {
            return (
                this.form.password &&
                this.confirmPassword &&
                this.form.password !== this.confirmPassword
            );
        }
    }
}
</script>

<style scoped>
.registration {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    animation: fadeInUp 0.6s ease;
}

.registration__wrapper {
    height: 800px;
    display: flex;

    align-items: center;
    justify-content: center;
}

.registration__background {
    width: 600px;
    height: 100%;
    position: relative;
}

.registration__background::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
}

.registration__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.registration__form {
    padding: 50px;
    width: 600px;
    height: 100%;
    background-color: #FFC8B2;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.registration__title-wrap {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
}

.registration__title,
.registration__form-title {
    color: #F9F9F9;
    font-family: var(--secondary-font);
    font-size: 35px;
}

.registration__form-title {
    color: #201F21;
}

.registration__input-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.registration__label {
    color: #201F21;
    font-family: var(--main-font);
    font-weight: 500;
    font-size: 16px;
}

.registration__label--fullname {}

.registration__input {
    width: 100%;
    font-family: var(--main-font);
    font-size: 16px;
    background-color: #F9F9F9;
    border: 1px solid #F9F9F9;
    padding: 15px;

    outline: none;
    transition: 0.3s ease-in-out;
}

.registration__select {
    padding: 15px;
    height: 50px;
    width: 100%;
    font-family: var(--main-font);
    font-size: 16px;
    background-color: #F9F9F9;
    border: 1px solid #F9F9F9;

    outline: none;
    transition: none;
}

.registration__option {
    font-family: var(--main-font);
    font-size: 16px;
}

.registration__input-wrap--comfirm {
    flex-direction: row;
    margin: 10px 0;
}

.registration__input-checkbox {}

.registration__button {
    width: 100%;
}

.registration__btn {
    background-color: #201F21;
    color: #F9F9F9;
    font-family: var(--secondary-font);
    padding: 16px;
    width: 100%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}

.registration__btn--save:hover {
    background-color: #F9F9F9;
    color: #201F21;
}


.registration__select:active {
    border: none;
}

.registration__input:focus,
.registration__select:focus {
    border-color: #201F21;
    background-color: #fff;
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