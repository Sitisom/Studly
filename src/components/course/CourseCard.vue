<template>
  <router-link :to="{name: 'CourseDetail', params: {id: id}}" class="course-card">
    <div class="card-top">
      <div class="tags">
        <div class="rate-plan-tag">{{rate_plan.title}}</div>
        <div class="subscribed-tag" v-if="subscribed">Вы подписаны!</div>
      </div>

      <img :src="image" alt="">
    </div>
    <div class="card-bottom">
      <h6>{{title}}</h6>
      <div class="d-flex flex-row justify-content-between">
        <span>{{subject}}</span>
        <Difficulty :difficulty="difficulty"/>
      </div>
    </div>
  </router-link>
</template>

<script>
import Difficulty from "@/components/course/Difficulty";

export default {
  name: 'CourseCard',
  components: {Difficulty,},

  props: ['id', 'title', 'image', 'subject', 'difficulty', 'rate_plan', 'subscribed']
}
</script>

<style scoped>
.course-card {
  display: block;
  text-decoration: none;
  color: black;
  border-radius: 8px;
  max-width: min-content;
  background-color: white;
}

.course-card img {
  border-radius: 8px 8px 0 0;
  max-height: 180px;
}

.card-bottom {
  padding: 12px 6px;
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

.rate-plan-tag {
  background-color: darkgray;
  padding: 0 4px;
}

.subscribed-tag {
  background-color: green;
}
</style>