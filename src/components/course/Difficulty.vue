<template>
  <div class="difficulty-bars" :style="{'height': maxHeight}">
    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>
  </div>
</template>

<script>
export default {
  name: "Difficulty",
  props: {
    difficulty: {
      type: Number,
      default: 0
    },
    maxHeight: {
      type: String,
      default: "15px"
    }
  }
}
</script>

<style scoped>
.difficulty-bars {
  display: flex;
  flex-direction: row;
  height: 20px;
  align-items: end;
}

.difficulty-bars > div {
  width: 4px;
  border: 0.3px black solid;
  margin-right: 2px;
  /*max-height: 15px;*/
}

.first {
  height: 20%;
  background-color: green;
}
.second {
  height: 50%;
}
.third {
  height: 100%;
}
</style>