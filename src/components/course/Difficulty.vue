<template>
  <div class="difficulty-bars">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
  </div>
</template>

<script>
export default {
  name: "Difficulty",
  props: ["difficulty"]
}
</script>

<style scoped>
.difficulty-bars {
  display: flex;
  flex-direction: row;
  height: 30px;
}

.difficulty-bars > div {
  width: 4px;
  border: 1px black solid;
}

.first {
  height: 20%;
  background-color: green;
}
.second {
  height: 60%;
}
.third {
  height: 100%;
}
</style>