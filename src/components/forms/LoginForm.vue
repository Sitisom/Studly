<template>
  <BaseForm :form="form" :submit="submit">
    <div class="form-group row">
      <label for="login-field">Login</label>
      <input v-model="form.username" type="text" id="login-field" class="form-control" name="login" required>
    </div>
    <div class="form-group row">
      <label for="password-field">Password</label>
      <input v-model="form.password" type="password" id="password-field" class="form-control" name="password" required>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/forms/BaseForm";
import $ from 'jquery'

export default {
  name: "LoginForm",
  components: { BaseForm },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {

      $.ajax({
        url: this.$store.getters.hostname + '/auth/login/',
        method: "POST",
        data: JSON.parse(JSON.stringify(this.form)),
        success: (response) => {
          this.$store.commit('setToken', response);
          this.$router.push("/profile");
        }
      })
    },
  },
}
</script>

<style scoped>

</style>