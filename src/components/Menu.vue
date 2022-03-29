<template>
  <div class="menu-navbar">
    <div class="main-icons">
      <v-icon class="menu-item" name="home" scale="2.5" @click="$router.push({name: 'Profile'})"/>
      <v-icon class="menu-item" name="graduation-cap" scale="2.5"></v-icon>
      <v-icon class="menu-item" name="file-alt" scale="2"/>
    </div>
    <v-icon class="menu-item justify-content-end" name="sign-out-alt" scale="2.2" @click="logout"/>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('/auth');
    }
  }
}
</script>

<style scoped>
  .menu-navbar {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 100vh;
    padding-top: 90px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: space-between;
  }

  .main-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-item {
    cursor: pointer;
    margin-bottom: 20px;
  }

  .menu-item:last-of-type {
    margin-bottom: 0;
  }
</style>