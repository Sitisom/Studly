<template>
  <header>
    <div class="logo" @click="$router.push('/profile')">
        <h1>Studly</h1>
    </div>
    <div class="user-creds">
      <img class="user-avatar" :src="$store.state.hostname + $store.state.user.profile.avatar" alt="">
      <span>{{ $store.state.user.profile.full_name }}</span>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header"
}
</script>

<style scoped>
  header {
    width: 100%;
    height: 72px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px 12px 0;
    align-items: center;
    /*padding: 0 15px;*/
    /*box-shadow: 0 8px 14px -1px rgba(34, 60, 80, 0.2);*/
  }

  h1{
    border-left: 8px solid blue;
  }

  .logo {
    margin-left: -45px;
  }

  .logo h1 {
    cursor: pointer;
    width: fit-content;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }
</style>