<template>
  <BaseForm :action="action" :form="form" class="text-left" :submit="submit">
    <div class="form-row">
      <div class="form-group col">
        <label for="first_name_field">First name</label>
        <input v-model="form.first_name" id="first_name_field" type="text" class="form-control" placeholder="First name" required>
      </div>
      <div class="form-group col">
        <label for="second_name_field">Second name</label>
        <input v-model="form.last_name" id="second_name_field" type="text" class="form-control" placeholder="Second name" required>
      </div>
    </div>
    <div class="form-group">
      <label for="email-field">Email</label>
      <input id="email-field" type="email" v-model="form.email" class="form-control">
    </div>
    <div class="form-group">
      <label for="login-field">Username</label>
      <input v-model="form.username" type="text" id="login-field" class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password1-field">Password</label>
      <input v-model="form.password" type="password" id="password1-field" class="form-control" required>
    </div>
    <div class="form-group">
      <label for="password2-field">Repeat password</label>
      <input v-model="form.password2" type="password" id="password2-field" class="form-control" required>
    </div>
  </BaseForm>
</template>

<script>

import BaseForm from "@/components/forms/BaseForm";
import $ from "jquery";

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
      $.ajax({
        url: this.$store.getters.hostname + '/auth/register/',
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