<template>
    <div class="register">
        <input type="text" placeholder="username" v-model="username"> {{ username }} <br>
        <input type="password" placeholder="password" v-model="password"> {{ password }} <br>
        <input type="text" placeholder="email" v-model="email"> {{ email }} <br>
        <input type="text" placeholder="fullname" v-model="fullname"> {{ fullname }}
        <button @click="register">Login</button>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      fullname: ''
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:3000/users/registeruser', {
        username: this.username,
        password: this.password,
        email: this.email,
        fullname: this.email
      })
        .then((response) => {
          let data = response.data.data
          console.log('response register => ', data)
          swal('Good job!', 'Register success !', {
            button: 'Okey'
          })
        })
        .catch((err) => {
          console.log('error register =>', err)
        })
    }
  }
}
</script>

<style>

</style>
