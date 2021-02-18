<template>
  <BaseForm :form="form">
    <div class="form-group row">
      <label for="login-field">Login</label>
      <input v-model="form.login" type="text" id="login-field" class="form-control" name="login">
    </div>
    <div class="form-group row">
      <label for="password-field">Password</label>
      <input v-model="form.password" type="password" id="password-field" class="form-control" name="password">
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/forms/BaseForm";

export default {
  name: "LoginForm",
  components: { BaseForm },
  data() {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>