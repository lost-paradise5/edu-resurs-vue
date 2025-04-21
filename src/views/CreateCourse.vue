<template>
    <div class="course-form">
      <h1>Создать новый курс</h1>
  
      <form @submit.prevent="submitCourse">
        <div class="form-group">
          <label>Название курса</label>
          <input v-model="form.title" type="text" required />
        </div>
  
        <div class="form-group">
          <label>Описание курса</label>
          <textarea v-model="form.description" required></textarea>
        </div>
  
        <div class="form-group">
          <label>Содержание курса</label>
          <textarea v-model="form.content" required></textarea>
        </div>
  
        <div v-if="error" class="error">{{ error }}</div>
  
        <button type="submit">Создать</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        form: {
          title: '',
          description: '',
          content: ''
        },
        error: ''
      }
    },
    methods: {
      async submitCourse() {
        this.error = ''
  
        try {
          const userId = localStorage.getItem('userId')
          if (!userId) {
            this.error = 'Не удалось определить пользователя.'
            return
          }
  
          const response = await axios.post('http://77.110.104.90:8000/api/courses/create/', {
            ...this.form,
            user_id: userId
          })
  
          if (response.status === 201) {
            this.$router.push({ name: 'CourseList' })
          }
        } catch (e) {
          this.error = 'Ошибка при создании курса'
          console.error(e)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .course-form {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background: #f3f3f3;
    border-radius: 10px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 6px;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }
  
  button {
    background-color: #201F21;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .error {
    color: red;
    margin-bottom: 10px;
  }
  </style>