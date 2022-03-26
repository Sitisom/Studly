<template>
  <div>
    <Header/>
    <main>
      <Menu/>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default {
  name: "BaseView",
  components: {Header, Menu}
}
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
  }
</style>