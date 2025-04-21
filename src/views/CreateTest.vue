<template>
    <div class="create-test">
        <h2>Создать тест для курса: {{ courseTitle }}</h2>

        <input v-model="testTitle" placeholder="Название теста" class="input-title" />

        <div v-for="(q, qIndex) in questions" :key="qIndex" class="question-block">
            <input v-model="q.text" placeholder="Вопрос" class="input-question" />

            <div v-for="(a, aIndex) in q.answers" :key="aIndex" class="answer-block">
                <input v-model="a.text" placeholder="Ответ" />
                <input type="checkbox" v-model="a.is_correct" /> Правильный
                <input type="number" v-model="a.points" placeholder="Баллы" min="0" />
                <button @click="removeAnswer(qIndex, aIndex)">Удалить ответ</button>
            </div>

            <button @click="addAnswer(qIndex)">Добавить ответ</button>
            <hr />
        </div>

        <button @click="addQuestion">Добавить вопрос</button>
        <button @click="submitTest">Сохранить тест</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            courseId: this.$route.params.id,
            courseTitle: '',
            testTitle: '',
            questions: []
        }
    },
    async mounted() {
        const res = await axios.get(`http://77.110.104.90:8000/api/courses/${this.courseId}/`)
        this.courseTitle = res.data.title
    },
    methods: {
        addQuestion() {
            this.questions.push({
                text: '',
                answers: []
            })
        },
        addAnswer(questionIndex) {
            this.questions[questionIndex].answers.push({
                text: '',
                is_correct: false,
                points: 1
            })
        },
        removeAnswer(questionIndex, answerIndex) {
            this.questions[questionIndex].answers.splice(answerIndex, 1)
        },
        async submitTest() {
            const userId = localStorage.getItem('userId')
            try {
                const testRes = await axios.post(`http://77.110.104.90:8000/api/tests/create/`, {
                    course_id: this.courseId,
                    title: this.testTitle,
                    created_by: userId
                })
                const testId = testRes.data.id

                for (const q of this.questions) {
                    const questionRes = await axios.post(`http://77.110.104.90:8000/api/questions/`, {
                        test: testId,
                        text: q.text
                    })

                    const questionId = questionRes.data.id
                    for (const a of q.answers) {
                        await axios.post(`http://77.110.104.90:8000/api/answers/`, {
                            question: questionId,
                            text: a.text,
                            is_correct: a.is_correct,
                            points: a.points
                        })
                    }
                }

                alert('Тест успешно создан!')
                this.$router.push({ name: 'CourseDetail', params: { id: this.courseId } })
            } catch (e) {
                console.error('Ошибка при создании теста:', e)
                alert('Ошибка при создании теста')
            }
        }
    }
}
</script>

<style scoped>
.input-title {
    padding: 10px;
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
}

.question-block {
    margin-bottom: 20px;
    border-left: 4px solid #ccc;
    padding-left: 15px;
}

.answer-block {
    display: flex;
    gap: 10px;
    margin-top: 5px;
}
</style>