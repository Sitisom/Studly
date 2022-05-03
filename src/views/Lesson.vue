<template>
  <BaseView>
    <div class="">
      <h1>Все уроки</h1>
      <div class="lesson-list">
        <LessonCard v-for="lesson in lessons.results"
                    v-bind="lesson"
                    :key="lesson.id"
        ></LessonCard>
      </div>
    </div>
  </BaseView>
</template>

<script>
import BaseView from "@/components/BaseView";
import Http from "@/mixins/Http";
import LessonCard from "@/components/lesson/LessonCard";

export default {
  name: "Lesson",
  components: {BaseView, LessonCard},
  mixins: [Http],
  data() {
    return {
      lessons: {
        results: [],
        count: 0,
        url: this.$store.state.hostname + this.$store.state.endpoints.lesson.list,
        next: '',
        loading: false,
      }
    }
  },
  created() {
    this.lessonsHttp = new this.http(this.$store.getters.getToken, this.lessons)
  },
  mounted() {
    this.lessonsHttp.getNew()
  }
}
</script>

<style scoped>

</style>