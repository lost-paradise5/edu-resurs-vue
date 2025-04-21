<template>
    <div class="profile-page">
        <h1>Личный кабинет</h1>

        <div v-if="profile">
            <p><strong>ФИО:</strong> {{ profile.full_name }}</p>
            <p><strong>Почта:</strong> {{ profile.email }}</p>
            <p><strong>Роль:</strong> {{ profile.role }}</p>
            <button @click="loadStats" class="btn">Статистика</button>
        </div>
        <div v-if="stats.length" class="stats">
            <h2>Результаты тестов:</h2>
            <ul>
                <li v-for="result in stats" :key="result.id">
                    <strong>{{ result.course_title }}</strong> —
                    {{ result.test_title }}:
                    {{ result.score }}/{{ result.max_score }} баллов —
                    <span :style="{ color: result.passed ? 'green' : 'red' }">
                        {{ result.passed ? 'Сдан' : 'Не сдан' }}
                    </span>
                </li>
            </ul>
        </div>
        <div v-else-if="statsLoaded && !stats.length">
            <p>Нет результатов тестов</p>
        </div>

        <div v-else-if="error">
            <p class="error">{{ error }}</p>
        </div>

        <div v-else>
            <p>Загрузка...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            profile: null,
            stats: [],
            error: null,
            statsLoaded: false
        }
    },
    mounted() {
        const userId = localStorage.getItem('userId')
        if (!userId) {
            this.error = 'Пользователь не найден. Пожалуйста, войдите заново.'
            return
        }

        axios.get(`http://77.110.104.90:8000/api/profile/${userId}/`)
            .then(response => {
                this.profile = response.data
            })
            .catch(error => {
                this.error = 'Не удалось загрузить профиль'
                console.error(error)
            })
    },
    methods: {
        async loadStats() {
            const userId = localStorage.getItem('userId')
            try {
                const res = await axios.get(`http://77.110.104.90:8000/api/stats/${userId}/`)
                this.stats = res.data
                this.statsLoaded = true
            } catch (e) {
                console.error('Ошибка при загрузке статистики', e)
                this.error = 'Ошибка при загрузке статистики'
            }
        }
    }
}
</script>

<style scoped>
.profile-page {
    padding: 20px;
}

.error {
    color: red;
}

.btn {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

.btn:hover {
    background-color: #1976d2;
}

.stats {
    margin-top: 30px;
}

.stats ul {
    list-style-type: none;
    padding: 0;
}

.stats li {
    margin-bottom: 10px;
}
</style>