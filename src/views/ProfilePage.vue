<template>
    <div class="profile-page">
        <h1>Личный кабинет</h1>

        <div v-if="profile">
            <p><strong>ФИО:</strong> {{ profile.full_name }}</p>
            <p><strong>Почта:</strong> {{ profile.email }}</p>
            <p><strong>Роль:</strong> {{ profile.role }}</p>
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
            error: null
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
</style>