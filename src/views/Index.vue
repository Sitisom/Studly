<template>
  <div class="index-page"></div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    if (this.$store.state.token) {
      if (this.$store.state.user.profile && this.$store.state.user.profile.subscriptions) {
        this.$router.push({name: 'Profile'})
      } else {
        this.$router.push({name: 'RatePlan'})
      }
    } else {
      this.$router.push({name: 'Auth'})
    }
  }
}
</script>
