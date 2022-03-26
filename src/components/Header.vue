<template>
  <header>
    <div class="text-left">
      <div class="row py-2">
        <div class="logo col-11" @click="$router.push('/profile')">
            <h1>Studly</h1>
        </div>
        <div class="col-1">
          <button class='btn btn-danger' @click="logout">Выйти</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout: function () {
      this.$store.commit('logout');
      this.$router.push('/auth');
    }
  }
}
</script>

<style scoped>
  header {
    width: 100%;
    padding: 0 15px;
    -webkit-box-shadow: 0 8px 14px -1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 8px 14px -1px rgba(34, 60, 80, 0.2);
    box-shadow: 0 8px 14px -1px rgba(34, 60, 80, 0.2);
  }

  h1{
    border-left: 8px solid blue;
  }

  .logo {
    cursor: pointer;
  }
</style>