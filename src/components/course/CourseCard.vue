<template>
  <div class="course-card">
    <div class="card-top">
      <img :src="image" alt="">
    </div>
    <div class="card-bottom">
      <h6>{{title}}</h6>
      <div class="d-flex flex-row justify-content-between">
        <span>{{subject}}</span>
        <Difficulty :difficulty="difficulty"/>
      </div>
    </div>
  </div>
</template>

<script>
import Difficulty from "@/components/course/Difficulty";

export default {
  name: 'CourseCard',
  components: {Difficulty,},

  props: ['id', 'title', 'image', 'subject', 'difficulty']
}
</script>

<style scoped>
.course-card {
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
</style>