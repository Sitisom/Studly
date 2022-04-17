<template>
  <BaseView>
    <div class="courses-page">
      <div class="page-header justify-content-between d-flex">
        <h1>Курсы</h1>
        <router-link :to="{ name: 'RatePlan'}">Улучшить подписку?</router-link>
      </div>

    </div>
  </BaseView>
</template>

<script>
import BaseView from "@/components/BaseView";
import Http from "@/mixins/Http";
export default {
  name: "Courses",
  components: {BaseView},
  mixins: {Http},
  data() {
    return {
      courses: {
        results: [],
        url: "",
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