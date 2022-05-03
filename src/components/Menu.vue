<template>
  <div class="menu-navbar">
    <div class="main-icons">
      <router-link :to="{name: 'Profile'}" class="menu-item">
        <v-icon
          name="home"
          scale="2.5"
        />
      </router-link>
      <router-link :to="{name: 'Course'}" class="menu-item">
        <v-icon
          name="graduation-cap"
          scale="2.5"
        />
      </router-link>
      <router-link :to="{name: 'Lesson'}" class="menu-item">
        <v-icon
          name="book-open"
          scale="2.5"
        />
      </router-link>
      <router-link :to="{name: 'RatePlan'}" class="menu-item">
        <v-icon
          name="briefcase"
          scale="2.5"
        />
      </router-link>
    </div>

    <div class="menu-item">
      <v-icon
          class="justify-content-end"
          name="sign-out-alt"
          scale="2.2"
          @click="logout"
      />
    </div>

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
    color: gray;
  }

  .main-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .menu-item {
    cursor: pointer;
    padding: 10px;
  }

  .menu-item:last-of-type {
    padding: 10px;
    margin-bottom: 0;
  }

  .menu-item.router-link-active {
    background-color: lightgray;
  }
</style>