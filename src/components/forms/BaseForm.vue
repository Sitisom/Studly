<template>
  <form :action="action" method="post" @submit.prevent="submit" class="text-left justify-content-center">
    <slot></slot>
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