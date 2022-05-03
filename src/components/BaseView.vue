<template>
  <div class="base-view">
    <div class="menu-container">
      <Menu/>
    </div>
    <div class="inner-content">
      <Header/>
      <main class="p-4">
        <slot></slot>
      </main>
    </div>
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

<style>
  main {
    /*display: flex;*/
    /*flex-direction: row;*/
    background-color: #EAEAEAD6;
    min-height: 92vh;
    border-radius: 8px 0 0 0;
  }

  .base-view {
    display: flex;
    flex-direction: row;
  }

  .inner-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>