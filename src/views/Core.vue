<template>
  <div>
    <Header></Header>
    <main class="container">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Base",
  components: {Header, }
}
</script>

<style scoped>

</style>