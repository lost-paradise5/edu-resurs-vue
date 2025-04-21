<template>
    <div class="course-list">
        <h2>Список курсов</h2>

        <div class="filters">
            <input type="text" v-model="search" placeholder="Поиск по названию" @input="fetchCourses" />
            <select v-model="selectedAuthor" @change="fetchCourses">
                <option value="">Все преподаватели</option>
                <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id">
                    {{ teacher.full_name }}
                </option>
            </select>
        </div>

        <div class="course-cards" v-if="courses.length">
            <div class="course-card" v-for="course in courses" :key="course.id" @click="goToCourse(course.id)">
                <h3>{{ course.title }}</h3>
                <p class="author">Автор: {{ course.author_name }}</p>
            </div>
        </div>
        <p v-else>Курсов не найдено.</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            courses: [],
            teachers: [],
            search: '',
            selectedAuthor: '',
        }
    },
    async mounted() {
        await this.fetchTeachers()
        await this.fetchCourses()
    },
    methods: {
        async fetchCourses() {
            try {
                const params = {}
                if (this.search) params.search = this.search
                if (this.selectedAuthor) params.author_id = this.selectedAuthor

                const response = await axios.get('http://77.110.104.90:8000/api/courses/', { params })
                this.courses = response.data
            } catch (err) {
                console.error('Ошибка загрузки курсов', err)
            }
        },
        async fetchTeachers() {
            try {
                const response = await axios.get('http://77.110.104.90:8000/api/users/')
                this.teachers = response.data.filter(user => user.role === 'преподаватель')
            } catch (err) {
                console.error('Ошибка загрузки преподавателей', err)
            }
        },
        goToCourse(id) {
            this.$router.push({ name: 'CourseDetail', params: { id } })
        },
    }
}
</script>

<style scoped>


.filters {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.course-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.course-card {
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: #f9fafb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.course-card:hover {
  transform: translateY(-4px);
  background-color: #eef6ff;
}

.course-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  color: #1a202c;
}

.course-card .author {
  font-size: 14px;
  color: #555;
}
</style>