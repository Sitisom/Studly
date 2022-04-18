<template>
  <BaseForm :action="action" :form="form" :submit="submit">
    <div class="form-row">
      <div class="form-group col">
        <label for="first_name_field">Имя</label>
        <input v-model="form.first_name" id="first_name_field" type="text" class="form-control" required>
      </div>
      <div class="form-group col">
        <label for="second_name_field">Фамилия</label>
        <input v-model="form.last_name" id="second_name_field" type="text" class="form-control" required>
      </div>
    </div>
    <div class="form-group">
      <label for="email-field">Email</label>
      <input id="email-field" type="email" v-model="form.email" class="form-control">
    </div>
    <div class="form-group">
      <label for="login-field">Логин</label>
      <input v-model="form.username" type="text" id="login-field" class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password1-field">Пароль</label>
      <input v-model="form.password" type="password" id="password1-field" class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password2-field">Повторите пароль</label>
      <input v-model="form.password2" type="password" id="password2-field" class="form-control" required>
    </div>
     <div class="text-center">
      <button class="btn btn-primary" type="submit">Зарегистрироваться</button>
    </div>
  </BaseForm>
</template>

<script>

import BaseForm from "@/components/forms/BaseForm";
import axios from "axios";

export default {
  name: "SignupForm",
  components: {BaseForm},
  data () {
    return {
      action: "/",
      form: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    submit() {
      axios.post(
        this.$store.state.hostname + this.$store.state.endpoints.auth.register,
        JSON.parse(JSON.stringify(this.form)),
      ).then((response) => {
        this.$store.commit('setToken', response);
        this.$router.push("/profile");
      }).catch(error => Object.keys(error.response.data).forEach(key => this.$toast.error(error.response.data[key])))
    },
  },
}
</script>

<style scoped>

</style>