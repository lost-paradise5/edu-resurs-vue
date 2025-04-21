<template>
    <div class="main">
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
    </div>
</template>

<script>
import axios from 'axios'

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

<style scoped>
.main {
    padding: 30px;
    font-family: Arial, sans-serif;
}

.main__header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.main__actions {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.main__content ul {
    list-style: none;
    padding: 0;
}

.main__content li {
    margin: 8px 0;
    cursor: pointer;
    color: #007bff;
}

.main__content li:hover {
    text-decoration: underline;
}
</style>