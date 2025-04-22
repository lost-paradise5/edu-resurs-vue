<template>
    <Notification v-if="message" :message="message" :type="type" />
    <section class="main-page">
        <aside class="sidebar">
            <div class="sidebar__header">
                <div class="sidebar__icon-wrap">
                    <img class="sidebar__icon" src="" alt="">
                </div>
                <div class="sidebar__side-title-wrap">
                    <span class="sidebar__side-title">Обазовательный ресурс БГУ</span>
                </div>
            </div>
            <nav class="sidebar__navbar">
                <div class="sidebar__nav-item sidebar__nav-main sidebar__nav--disable"
                    :class="{ 'sidebar__nav--active': $route.name === 'MainPage' }">
                    <svg class="sidebar__nav-icon sidebar__nav-icon--active" data-name="Layer 2" id="Layer_2"
                        viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path class="cls-1"
                            d="M30,15a1,1,0,0,1-.58-.19L16,5.23,2.58,14.81a1,1,0,0,1-1.16-1.62l14-10a1,1,0,0,1,1.16,0l14,10A1,1,0,0,1,30,15Z" />
                        <path class="cls-1" d="M5,9A1,1,0,0,1,4,8V4A1,1,0,0,1,5,3H9A1,1,0,0,1,9,5H6V8A1,1,0,0,1,5,9Z" />
                        <path class="cls-1"
                            d="M25,29H20a1,1,0,0,1-1-1V21H13v7a1,1,0,0,1-1,1H7a3,3,0,0,1-3-3V16a1,1,0,0,1,2,0V26a1,1,0,0,0,1,1h4V20a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1v7h4a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0V26A3,3,0,0,1,25,29Z" />
                    </svg>
                    <button class="sidebar__nav-title">
                        Главная
                    </button>
                </div>
                <div class="sidebar__nav-item sidebar__nav-courses sidebar__nav--disable">
                    <svg class="sidebar__nav-icon sidebar__nav-icon--active" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 21H3C2.40326 21 1.83097 20.7629 1.40901 20.341C0.987053 19.919 0.75 19.3467 0.75 18.75V5.25C0.75 4.65326 0.987053 4.08097 1.40901 3.65901C1.83097 3.23705 2.40326 3 3 3H9C9.11018 2.99982 9.21905 3.02392 9.31886 3.07059C9.41868 3.11725 9.50698 3.18534 9.5775 3.27L11.85 6H21C21.5967 6 22.169 6.23705 22.591 6.65901C23.0129 7.08097 23.25 7.65326 23.25 8.25V18.75C23.25 19.3467 23.0129 19.919 22.591 20.341C22.169 20.7629 21.5967 21 21 21ZM3 4.5C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18.75C2.25 18.9489 2.32902 19.1397 2.46967 19.2803C2.61032 19.421 2.80109 19.5 3 19.5H21C21.1989 19.5 21.3897 19.421 21.5303 19.2803C21.671 19.1397 21.75 18.9489 21.75 18.75V8.25C21.75 8.05109 21.671 7.86032 21.5303 7.71967C21.3897 7.57902 21.1989 7.5 21 7.5H11.4975C11.3886 7.49909 11.2812 7.47446 11.1827 7.42783C11.0843 7.3812 10.9972 7.3137 10.9275 7.23L8.6475 4.5H3Z" />
                        <path d="M4.79999 10.4H19.2" stroke-width="2" stroke-linecap="round" />
                        <path d="M4.79999 15.2H16.05" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    <button class="sidebar__nav-title">
                        Курсы
                    </button>
                </div>
                <div class="sidebar__nav-item sidebar__nav-tasks sidebar__nav--disable">
                    <svg class="sidebar__nav-icon sidebar__nav-icon--active" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_56_44)">
                            <path
                                d="M10.5 15.1351L7.8075 12.4426L6.75 13.5001L10.5 17.2501L17.25 10.5001L16.1925 9.43506L10.5 15.1351Z" />
                            <path
                                d="M18.75 3.75H16.5V3C16.5 2.60218 16.342 2.22064 16.0607 1.93934C15.7794 1.65804 15.3978 1.5 15 1.5H9C8.60218 1.5 8.22064 1.65804 7.93934 1.93934C7.65804 2.22064 7.5 2.60218 7.5 3V3.75H5.25C4.85218 3.75 4.47064 3.90804 4.18934 4.18934C3.90804 4.47064 3.75 4.85218 3.75 5.25V21C3.75 21.3978 3.90804 21.7794 4.18934 22.0607C4.47064 22.342 4.85218 22.5 5.25 22.5H18.75C19.1478 22.5 19.5294 22.342 19.8107 22.0607C20.092 21.7794 20.25 21.3978 20.25 21V5.25C20.25 4.85218 20.092 4.47064 19.8107 4.18934C19.5294 3.90804 19.1478 3.75 18.75 3.75ZM9 3H15V6H9V3ZM18.75 21H5.25V5.25H7.5V7.5H16.5V5.25H18.75V21Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_56_44">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <button class="sidebar__nav-title">
                        Задания
                    </button>
                </div>
                <div class="sidebar__nav-item sidebar__nav-account sidebar__nav--disable">
                    <svg class="sidebar__nav-icon sidebar__nav-icon--active" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 18H3C2.40326 18 1.83097 17.7629 1.40901 17.341C0.987053 16.919 0.75 16.3467 0.75 15.75V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H21C21.5967 1.5 22.169 1.73705 22.591 2.15901C23.0129 2.58097 23.25 3.15326 23.25 3.75V15.75C23.25 16.3467 23.0129 16.919 22.591 17.341C22.169 17.7629 21.5967 18 21 18ZM3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V15.75C2.25 15.9489 2.32902 16.1397 2.46967 16.2803C2.61032 16.421 2.80109 16.5 3 16.5H21C21.1989 16.5 21.3897 16.421 21.5303 16.2803C21.671 16.1397 21.75 15.9489 21.75 15.75V3.75C21.75 3.55109 21.671 3.36032 21.5303 3.21967C21.3897 3.07902 21.1989 3 21 3H3Z" />
                        <path
                            d="M15.75 22.5001H8.25003C8.14057 22.5015 8.03214 22.4789 7.93233 22.434C7.83253 22.389 7.74377 22.3227 7.6723 22.2398C7.60083 22.1569 7.54837 22.0594 7.51861 21.954C7.48885 21.8487 7.48251 21.7381 7.50003 21.6301L8.25003 17.1301C8.27878 16.9526 8.37032 16.7914 8.50798 16.6757C8.64564 16.5601 8.82026 16.4977 9.00003 16.5001H15C15.1798 16.4977 15.3544 16.5601 15.4921 16.6757C15.6297 16.7914 15.7213 16.9526 15.75 17.1301L16.5 21.6301C16.5176 21.7381 16.5112 21.8487 16.4815 21.954C16.4517 22.0594 16.3992 22.1569 16.3278 22.2398C16.2563 22.3227 16.1675 22.389 16.0677 22.434C15.9679 22.4789 15.8595 22.5015 15.75 22.5001ZM9.13503 21.0001H14.865L14.3625 18.0001H9.63753L9.13503 21.0001Z" />
                        <path
                            d="M18 22.5H6C5.80109 22.5 5.61032 22.421 5.46967 22.2803C5.32902 22.1397 5.25 21.9489 5.25 21.75C5.25 21.5511 5.32902 21.3603 5.46967 21.2197C5.61032 21.079 5.80109 21 6 21H18C18.1989 21 18.3897 21.079 18.5303 21.2197C18.671 21.3603 18.75 21.5511 18.75 21.75C18.75 21.9489 18.671 22.1397 18.5303 22.2803C18.3897 22.421 18.1989 22.5 18 22.5Z" />
                        <path
                            d="M22.5 14.25H1.5C1.30109 14.25 1.11032 14.171 0.96967 14.0303C0.829018 13.8897 0.75 13.6989 0.75 13.5C0.75 13.3011 0.829018 13.1103 0.96967 12.9697C1.11032 12.829 1.30109 12.75 1.5 12.75H22.5C22.6989 12.75 22.8897 12.829 23.0303 12.9697C23.171 13.1103 23.25 13.3011 23.25 13.5C23.25 13.6989 23.171 13.8897 23.0303 14.0303C22.8897 14.171 22.6989 14.25 22.5 14.25Z" />
                    </svg>
                    <button class="sidebar__nav-title">
                        Личный кабинет
                    </button>
                </div>
                <div class="sidebar__nav-item sidebar__nav-info-platform sidebar__nav--disable">
                    <svg class="sidebar__nav-icon sidebar__nav-icon--active" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_57_99)">
                            <path
                                d="M15 6.75C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6C14.25 6.41421 14.5858 6.75 15 6.75Z" />
                            <path
                                d="M17.25 6.75C17.6642 6.75 18 6.41421 18 6C18 5.58579 17.6642 5.25 17.25 5.25C16.8358 5.25 16.5 5.58579 16.5 6C16.5 6.41421 16.8358 6.75 17.25 6.75Z" />
                            <path
                                d="M19.5 6.75C19.9142 6.75 20.25 6.41421 20.25 6C20.25 5.58579 19.9142 5.25 19.5 5.25C19.0858 5.25 18.75 5.58579 18.75 6C18.75 6.41421 19.0858 6.75 19.5 6.75Z" />
                            <path
                                d="M21 3H3C2.60232 3.00046 2.22105 3.15864 1.93984 3.43984C1.65864 3.72105 1.50046 4.10232 1.5 4.5V19.5C1.50046 19.8977 1.65864 20.2789 1.93984 20.5602C2.22105 20.8414 2.60232 20.9995 3 21H21C21.3977 20.9995 21.7789 20.8414 22.0602 20.5602C22.3414 20.2789 22.4995 19.8977 22.5 19.5V4.5C22.4995 4.10232 22.3414 3.72105 22.0602 3.43984C21.7789 3.15864 21.3977 3.00046 21 3ZM21 4.5V7.5H3V4.5H21ZM3 9H7.5V19.5H3V9ZM9 19.5V9H21V19.5H9Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_57_99">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <button class="sidebar__nav-title">
                        О платформе
                    </button>
                </div>
            </nav>
            <div class="sidebar__signout">
                <div class="sidebar__signout-line"></div>
                <div class="sidebar__signout-btn">
                    <div class="sidebar__signout-icon">

                    </div>
                    <button class="sidebar__signout-button">Выход</button>
                </div>
            </div>
        </aside>
        <section>
            <header class="header">
                <div class="header__page-name-wrap">
                    <span class="header__page-name">Главная</span>
                </div>
                <div class="header__user-field">
                    <div class="header__notification-icon">

                    </div>
                    <div class="header__full-name-wrap">
                        <span class="header__full-name"></span>
                    </div>
                </div>
            </header>
            <main class="main">
                <div class="main__image">
                    <img class="main__img" src="" alt="">
                </div>
                <div class="main__infomation">
                    <div class="main__title-wrap">
                        <h1 class="main__title">Добро пожаловать на образовательный ресурс БГУ</h1>
                    </div>
                    <div class="main__text-wrap">
                        <p class="main__text">
                            Здесь вы как преподаватель, можете добавить ресурсы и задания для студентов в рамках вашего
                            курса. Если вы - студент то посетить курс и решить задания по заданному курсу.
                        </p>
                    </div>
                    <router-link class="main__button">Записаться на курс</router-link>
                </div>
            </main>
            <section class="courses">
                <div class="courses__buttons">
                    <div class="courses__btn-wrap">
                        <button class="courses__button courses__button--on">Популярные курсы</button>
                        <button class="courses__button">Ваши курсы</button>
                    </div>
                    <div class="courses__line"></div>
                </div>
                <div class="courses__wrapper">
                    <CoursesCard />
                </div>
            </section>

        </section>
    </section>



    <!-- <div class="main">
        <header class="main__header">
            <h2>Добро пожаловать, {{ user.full_name }} ({{ user.role }})</h2>
            <div class="main__actions">
                <button @click="goToProfile">Личный кабинет</button>
                <button @click="goToMyCourses">Мои курсы</button>
                <button v-if="user.role === 'преподаватель'" @click="goToCreateCourse">Создать курс</button>
                <button @click="goToCourses">Список курсов</button>
                <button @click="logout">Выход</button>
            </div>
        </header>

        <main class="main__content">
            <p>Вы находитесь на главной странице платформы.</p>

        </main>
    </div> -->
</template>

<script>
import { useNotification } from '@/composables/useNotification';
import Notification from '@/components/Notification.vue';
import CoursesCard from '@/components/CoursesCard.vue';
import api from '@/api/axios'

import iconPersonalAccount from '@/assets/image/iconPersonalAccount.svg'


export default {
    data() {
        return {
            user: {
                id: null,
                full_name: '',
                role: '',
            },
            courses: [],
        }
    },
    async mounted() {
        try {
            const userId = localStorage.getItem('userId')
            const userRes = await axios.get(`http://77.110.104.90:8000/api/profile/${userId}/`)
            this.user = userRes.data

            const coursesRes = await axios.get('http://77.110.104.90:8000/api/courses/')
            this.courses = coursesRes.data
        } catch (e) {
            console.error('Ошибка при загрузке данных:', e)
        }
    },
    components: {
        Notification,
        CoursesCard
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({ name: 'Login' })
        },
        goToProfile() {
            this.$router.push({ name: 'Profile' })
        },
        goToCreateCourse() {
            this.$router.push({ name: 'CourseCreate' })
        },
        goToCourses() {
            this.$router.push({ name: 'CourseList' })
        },
        goToMyCourses() {
            this.$router.push({ name: 'MyCourses' })
        }
    }
}
</script>

<style>
.main-page {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #F9F9F9;
}

.sidebar {
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    gap: 205px;
    width: 240px;
}

.sidebar__header {
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.sidebar__icon-wrap {
    width: 24px;
    height: 24px;
}

.sidebar__icon {
    width: 100%;
    height: 100%;
    background-color: #201F21;
}

.sidebar__side-title-wrap {}

.sidebar__side-title {
    font-family: var(--secondary-font);
    font-size: 20px;
}

.sidebar__navbar {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.sidebar__nav-item {
    height: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
}

.sidebar__nav-icon {

    width: 24px;
    height: 24px;
    fill: #A0A0A2;
    color: #A0A0A2;
}


.sidebar__nav-title {
    font-family: var(--secondary-font);
    font-size: 20px;
}

.sidebar__nav--active > .sidebar__nav-icon--active {
    border-left: 4px solid #000;
    color: #000;
    fill: #201F21;
}

.sidebar__signout {}

.sidebar__signout-line {}

.sidebar__signout-btn {}

.sidebar__signout-icon {}

.sidebar__signout-button {}

.header {}

.header__page-name-wrap {}

.header__page-name {}

.header__user-field {}

.header__notification-icon {}

.header__full-name-wrap {}

.header__full-name {}

.main {}

.main__image {}

.main__img {}

.main__infomation {}

.main__title-wrap {}

.main__title {}

.main__text-wrap {}

.main__text {}

.main__button {}

.courses {}

.courses__buttons {}

.courses__btn-wrap {}

.courses__button {}

.courses__button--on {}

.courses__line {}

.courses__wrapper {}
</style>