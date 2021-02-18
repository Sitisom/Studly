<template>
  <BaseForm :action="action" :form="form">
    <div class="form-group row">
      <label for="login-field">Login</label>
      <input v-model="form.login" type="text" id="login-field" class="form-control" name="login">
    </div>
    <div class="form-group row">
      <label for="password1-field">Password</label>
      <input v-model="form.password1" type="password" id="password1-field" class="form-control" name="password1">
    </div>
    <div class="form-group row">
      <label for="password2-field">Repeat password</label>
      <input v-model="form.password2" type="password" id="password2-field" class="form-control" name="password2">
    </div>
  </BaseForm>
</template>

<script>

import BaseForm from "@/components/forms/BaseForm";

export default {
  name: "SignupForm",
  components: {BaseForm},
  data () {
    return {
      action: "/",
      form: {
        login: '',
        password1: '',
        password2: ''
      }
    }
  }
}
</script>

<style scoped>

</style>