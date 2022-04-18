<template>
  <BaseForm :form="form" :submit="submit">
    <div class="form-group">
      <label for="login-field">Логин</label>
      <input v-model="form.username" type="text" id="login-field" class="form-control" name="login" required>
    </div>
    <div class="form-group">
      <label for="password-field">Пароль</label>
      <input v-model="form.password" type="password" id="password-field" class="form-control" name="password" required>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" type="submit">Войти</button>
    </div>
  </BaseForm>
</template>

<script>
import BaseForm from "@/components/forms/BaseForm";
import axios from "axios";

export default {
  name: "LoginForm",
  components: { BaseForm },
  data() {
    return {
      form: {
        username: this.$store.state.username,
        password: this.$store.state.password
      }
    }
  },
  methods: {
    submit() {
      axios.post(
    this.$store.state.hostname + this.$store.state.endpoints.auth.login,
        JSON.parse(JSON.stringify(this.form)),
      ).then(response => {
        console.log(response)
        this.$store.commit("setToken", response.data);
        this.$router.push({name: "Index"});
      }).catch(error => Object.keys(error.response.data).forEach(key => this.$toast.error(error.response.data[key])))
    },
  },
}
</script>

<style scoped>

</style>