<template>
  <router-link :to="{name: 'LessonDetail'}" class="lesson-card">
    <div class="card-top">
      <div class="tags">
        <div class="tag">{{course}}</div>
<!--        <div class="subscribed-tag" v-if="subscribed">Вы подписаны!</div>-->
      </div>
      <img :src="$store.state.hostname + image" alt="">
    </div>
    <div class="card-bottom">
      <h6>{{title}}</h6>
      <span>Тема: {{topic}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "LessonCard",
  props: {
    title: String,
    topic: String,
    course: String,
    image: String,
    has_homework: Boolean,
  }
}
</script>

<style scoped>
.lesson-card {
  display: block;
  text-decoration: none;
  color: black;
  border-radius: 8px;
  max-width: min-content;
  background-color: white;
}

.card-top img {
  border-radius: 8px 8px 0 0;
  max-height: 180px;
}

.card-bottom {
  padding: 12px 6px;
  background-color: white;
  border-radius: 0 0 8px 8px;
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  color: white;
  font-size: 12px;
}

.tags div {
  padding: 0 4px;
  border-radius: 4px;
  margin: 4px 0 0 4px;
}

.tag {
  background-color: darkgray;
  padding: 0 4px;
}
</style>