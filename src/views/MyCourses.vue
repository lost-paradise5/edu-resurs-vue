<template>
    <div class="my-courses">
        <h2>Мои курсы</h2>

        <div v-if="courses.length">
            <ul>
                <li v-for="course in courses" :key="course.id" @click="goToCourse(course.id)">
                    <strong>{{ course.title }}</strong> — {{ course.author_name }}
                </li>
            </ul>
        </div>

        <div v-else class="empty">
            <p>Вы пока не записаны ни на один курс.</p>
            <button @click="goToAllCourses">Записаться?</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            courses: []
        }
    },
    async mounted() {
        const userId = localStorage.getItem('userId')
        try {
            const res = await axios.get(`http://77.110.104.90:8000/api/my-courses/${userId}/`)
            this.courses = res.data
        } catch (error) {
            console.error('Ошибка при загрузке курсов:', error)
        }
    },
    methods: {
        goToCourse(id) {
            this.$router.push({ name: 'CourseDetail', params: { id } })
        },
        goToAllCourses() {
            this.$router.push({ name: 'CourseList' })
        }
    }
}
</script>

<style scoped>
.my-courses {
    padding: 30px;
    font-family: Arial, sans-serif;
}

.my-courses ul {
    list-style: none;
    padding: 0;
}

.my-courses li {
    margin: 8px 0;
    cursor: pointer;
    color: #007bff;
}

.my-courses li:hover {
    text-decoration: underline;
}

.empty {
    text-align: center;
    margin-top: 40px;
}

.empty button {
    padding: 10px 20px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.empty button:hover {
    background: #0056b3;
}
</style>