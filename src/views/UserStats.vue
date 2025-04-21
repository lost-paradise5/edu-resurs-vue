<template>
    <div class="user-stats">
        <h2>Моя статистика</h2>
        <div v-for="entry in stats" :key="entry.course.id" class="stat-card">
            <h3>{{ entry.course.title }}</h3>
            <p>Прогресс: {{ entry.progress_percent }}%</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            stats: []
        }
    },
    async mounted() {
        const userId = localStorage.getItem('userId')
        const res = await axios.get(`http://77.110.104.90:8000/api/user-stats/${userId}/`)
        this.stats = res.data
    }
}
</script>

<style scoped>
.stat-card {
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    background-color: #f9f9f9;
}
</style>