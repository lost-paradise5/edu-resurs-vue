<template>
    <div class="course-detail" v-if="course">
        <h2>{{ course.title }}</h2>
        <p><strong>Автор:</strong> {{ course.author_name }}</p>
        <p><strong>Описание:</strong> {{ course.description }}</p>
        <p><strong>Содержание:</strong> {{ course.content }}</p>

        <div class="actions">
            <button v-if="!isEnrolled" @click="enroll" class="btn btn--enroll">
                Записаться
            </button>
            <button v-else @click="unenroll" class="btn btn--unenroll">
                Отписаться
            </button>
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
            isEnrolled: false
        }
    },
    async mounted() {
        const courseId = this.$route.params.id
        const userId = localStorage.getItem('userId')

        try {
            const res = await axios.get(`http://77.110.104.90:8000/api/courses/${courseId}/`)
            this.course = res.data

            const enrollmentCheck = await axios.get(`http://77.110.104.90:8000/api/my-courses/${userId}/`)
            this.isEnrolled = enrollmentCheck.data.some(c => c.id == courseId)
        } catch (e) {
            console.error('Ошибка загрузки курса:', e)
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
    /* зелёный */
    color: white;
}

.btn--enroll:hover {
    background-color: #45a049;
}

.btn--unenroll {
    background-color: #f44336;
    /* красный */
    color: white;
}

.btn--unenroll:hover {
    background-color: #d32f2f;
}
</style>