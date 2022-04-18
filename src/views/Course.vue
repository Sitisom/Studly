<template>
  <BaseView>
    <div class="courses-page">
      <div class="page-header justify-content-between d-flex">
        <h1>Курсы</h1>
        <router-link :to="{ name: 'RatePlan'}">Улучшить подписку?</router-link>
      </div>
      <div class="courses-list">
        <CourseCard
            v-for="course in courses.results"
            v-bind="course"
            :key="course.id"
        />
      </div>
    </div>
  </BaseView>
</template>

<script>
import BaseView from "@/components/BaseView";
import Http from "@/mixins/Http";
import CourseCard from "@/components/course/CourseCard";
export default {
  name: "Courses",
  components: {BaseView, CourseCard},
  mixins: [Http],
  data() {
    return {
      courses: {
        results: [],
        url: this.$store.state.hostname + this.$store.state.endpoints.course.list,
        next: "",
        count: 0,
        loading: false
      }
    }
  },
  created() {
    this.coursesHttp = new this.http(this.$store.getters.getToken, this.courses)
  },
  mounted() {
    this.coursesHttp.getNew()
  }
}
</script>

<style scoped>
.courses-page {
  width: 100%;
}
</style>