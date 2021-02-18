<template>
  <form :action="action" method="post" @submit.prevent="submit">
    <slot></slot>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "BaseForm",
  props: {
    action: {
      type: String,
      default: ''
    },
    form: {
      type: Object,
    },
    submit: {
      type: Function,
      default: function () { this.formSubmit() }
    }
  },
  methods: {
    formSubmit() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>

</style>