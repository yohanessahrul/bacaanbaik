<template>
  <div class="home">
    <h3>Home</h3>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  }
}
</script>
