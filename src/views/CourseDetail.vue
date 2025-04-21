<template>
    <div class="course-detail" v-if="course">
        <h2>{{ course.title }}</h2>
        <p><strong>Автор:</strong> {{ course.author_name }}</p>
        <p><strong>Описание:</strong> {{ course.description }}</p>
        <p><strong>Содержание:</strong> {{ course.content }}</p>

        <div class="actions">
            <button v-if="!isEnrolled" @click="enroll" class="btn btn--enroll">Записаться</button>
            <button v-else @click="unenroll" class="btn btn--unenroll">Отписаться</button>
        </div>

        <div v-if="isTeacher" class="teacher-actions">
            <button @click="goToCreateTest" class="btn btn--create-test">Создать тест для курса</button>
        </div>

        <div class="tests" v-if="tests.length">
            <h3>Тесты:</h3>
            <ul>
                <li v-for="test in tests" :key="test.id">
                    <router-link :to="{ name: 'TestTake', params: { id: test.id } }">
                        {{ test.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <p v-else>Загрузка...</p>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            course: null,
            isEnrolled: false,
            isTeacher: false,
            tests: []
        }
    },
    async mounted() {
        const courseId = this.$route.params.id
        const userId = localStorage.getItem('userId')

        try {
            const [courseRes, enrollmentRes, userRes, testsRes] = await Promise.all([
                axios.get(`http://77.110.104.90:8000/api/courses/${courseId}/`),
                axios.get(`http://77.110.104.90:8000/api/my-courses/${userId}/`),
                axios.get(`http://77.110.104.90:8000/api/profile/${userId}/`),
                axios.get(`http://77.110.104.90:8000/api/courses/${courseId}/tests/`)
            ])

            this.course = courseRes.data
            this.isEnrolled = enrollmentRes.data.some(c => c.id == courseId)
            this.isTeacher = userRes.data.role === 'преподаватель'
            this.tests = testsRes.data
        } catch (e) {
            console.error('Ошибка при загрузке данных:', e)
        }
    },
    methods: {
        async enroll() {
            const userId = localStorage.getItem('userId')
            try {
                await axios.post('http://77.110.104.90:8000/api/enroll/', {
                    user_id: userId,
                    course_id: this.course.id
                })
                this.isEnrolled = true
            } catch (e) {
                console.error('Ошибка при записи:', e)
            }
        },
        async unenroll() {
            const userId = localStorage.getItem('userId')
            try {
                await axios.post('http://77.110.104.90:8000/api/unenroll/', {
                    user_id: userId,
                    course_id: this.course.id
                })
                this.isEnrolled = false
            } catch (e) {
                console.error('Ошибка при отписке:', e)
            }
        },
        goToCreateTest() {
            this.$router.push({ name: 'CreateTest', params: { courseId: this.course.id } })
        }
    }
}
</script>

<style scoped>
.actions {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}

.btn {
    padding: 10px 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    transition: 0.2s ease;
}

.btn--enroll {
    background-color: #4caf50;
    color: white;
}

.btn--enroll:hover {
    background-color: #45a049;
}

.btn--unenroll {
    background-color: #f44336;
    color: white;
}

.btn--unenroll:hover {
    background-color: #d32f2f;
}

.btn--create-test {
    background-color: #2196f3;
    color: white;
}

.btn--create-test:hover {
    background-color: #1976d2;
}

.tests {
    margin-top: 30px;
}

.tests ul {
    list-style: none;
    padding: 0;
}

.tests li {
    margin-bottom: 10px;
}

.tests a {
    color: #2196f3;
    text-decoration: none;
    font-weight: bold;
}

.tests a:hover {
    text-decoration: underline;
}
</style>