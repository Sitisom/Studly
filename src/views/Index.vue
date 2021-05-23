<template>
  <div class="home row">
    <div class="col">
      <router-link to="/auth" class="btn btn-info">Авторизация</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  beforeCreate() {
    if (this.$store.state.token) {
      this.$router.push({name: 'Profile'})
    } else {
      this.$router.push({name: 'Auth'})
    }
  }
}
</script>
