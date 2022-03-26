<template>
  <div class="menu-navbar">
    <BIconHouseFill style="font-size: 30pt"></BIconHouseFill>
  </div>
</template>

<script>
import {BIconHouseFill} from "bootstrap-vue";

export default {
  name: "Menu",
  components: {BIconHouseFill}
}
</script>

<style scoped>
  .menu-navbar {
    min-height: 1000px;
    width: 64px;
    -webkit-box-shadow: 9px -2px 11px -2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 9px -2px 11px -2px rgba(34, 60, 80, 0.2);
    box-shadow: 9px -2px 11px -2px rgba(34, 60, 80, 0.2);
  }
</style>