<template>
    <div class="login">
        <input type="text" placeholder="email" v-model="email"> {{ email }} <br>
        <input type="password" placeholder="password" v-model="password"> {{ password }}
        <button @click="login">Login</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/users/signin', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          let data = response.data
          swal(`Welcome ${data.username}!, Login success !`, {
            button: 'Okey'
          })
          localStorage.setItem('token', data.token)
          console.log(data)
          if (localStorage.getItem('token')) {
            if (data.role === 'admin') {
              this.$router.push('/adminbook')
            } else {
              this.$router.push('/')
            }
          }
        })
        .catch((err) => {
          console.log('error login =>', err)
        })
    }
  }
}
</script>

<style>

</style>
