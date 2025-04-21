<template>
    <div v-if="test">
        <h2>{{ test.title }}</h2>

        <form @submit.prevent="submitTest">
            <div v-for="question in test.questions" :key="question.id" class="question-block">
                <p><strong>{{ question.text }}</strong></p>

                <div v-for="answer in question.answers" :key="answer.id">
                    <label>
                        <input type="checkbox" :value="answer.id" v-model="userAnswers[question.id]" />
                        {{ answer.text }}
                    </label>
                </div>
            </div>

            <button class="btn" type="submit">Отправить</button>
        </form>

        <div v-if="result !== null" class="result">
            <p>Результат: {{ result.total_points }} баллов</p>
            <p v-if="result.passed">✅ Тест сдан</p>
            <p v-else>❌ Тест не сдан.</p>
        </div>
    </div>

    <p v-else>Загрузка теста...</p>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            test: null,
            userAnswers: {},
            result: null
        }
    },
    async mounted() {
        const testId = this.$route.params.id
        const res = await axios.get(`http://77.110.104.90:8000/api/tests/${testId}/`)
        this.test = res.data

        for (const q of res.data.questions) {
            this.userAnswers[q.id] = []
        }
    },
    methods: {
        async submitTest() {
            const userId = localStorage.getItem('userId')

            const response = await axios.post(`http://77.110.104.90:8000/api/tests/${this.test.id}/submit/`, {
                user_id: userId, 
                answers: this.userAnswers
            })

            this.result = response.data
        }
    }
}
</script>

<style scoped>
.question-block {
    margin-bottom: 20px;
}

.btn {
    margin-top: 20px;
    padding: 10px 20px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.result {
    margin-top: 20px;
    font-weight: bold;
}
</style>