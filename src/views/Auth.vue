<template>
    <div class="auth-form-container row" style="height: 100vh">
      <div class="auth-left col-12 col-lg-5">
        <div class="auth-header">
          <h1 class="">Studly</h1>
          <span>Образовательная платформа</span>
        </div>
        <div class="auth-bg-img h-100"></div>
      </div>
      <div class="auth-right col-12 col-lg-7">
        <div class="row h-100 justify-content-center">
          <div class="col-11 col-lg-4">
            <div class="form-container">
              <Tabs :tabs="tabs" :current-tab="currentTab" @change-tab="changeTab"></Tabs>
              <component :is="currentAuthForm"></component>
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import SignupForm from "@/components/forms/SignupForm";
import LoginForm from "@/components/forms/LoginForm";

export default {
  name: "Auth",
  components: { SignupForm, LoginForm, Tabs },
  data() {
    return {
      tabs: ['Login', 'Signup'],
      currentTab: "Login"
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    }
  },
  computed: {
    currentAuthForm() {
      return this.currentTab + 'Form'
    }
  }
}
</script>

<style scoped>
.auth-bg-img {
  background: linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ),
              url("../assets/auth_img.jpg") center no-repeat;
  margin: 0 -16px;
}

.auth-header {
  position: absolute;
  top: 30%;
  left: 20%;
  color: white;
  text-align: start;
}

.auth-header h1 {
  font-size: 64px;
}

.auth-left {
  height: 30%;
}

@media (min-width: 992px) {
  .form-container {
    margin-top: 25vh;
  }
  .auth-left {
    height: 100%;
  }
}

</style>