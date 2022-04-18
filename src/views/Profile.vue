<template>
  <BaseView>
    <div class="profile-page">
      <section class="">
        <div class="section-header">
          <h1>Ваши подписки</h1>
          <router-link :to="{ name: 'Course'}">Посмотреть все курсы</router-link>
        </div>
        <div class="tests row" v-if="tests.results">
          <div class='col-6 col-md-3' v-for="test in tests.results" :key="test.id" @click="testDetail(test)">
            <LessonCard :id="test.id"
                  :title="test.title"
                  :teacher="test.teacher"
                  :count="test.count"
                  :status="test.status"></LessonCard>
          </div>
        </div>
      </section>
    </div>
  </BaseView>
</template>

<script>

import Http from '@/mixins/Http'
import LessonCard from "@/components/tests/LessonCard";
import BaseView from "@/components/BaseView";

export default {
  name: 'Profile',
  components: {LessonCard, BaseView},
  mixins: [Http],
  data() {
    return {
      tests: {
        count: 0,
        results: [],
        next: '',
        url: this.$store.state.hostname + '/tests/assignments',
        loading: false
      }
    }
  },
  beforeCreate() {
    if (!this.$store.state.token) {
      this.$router.push({name: 'Auth'});
    }
  },
  created() {
    this.http = new this.http(this.$store.getters.getToken, this.tests)
  },
  mounted() {

    this.http.getNew()
  },
  methods: {
    testDetail: function (obj) {
      this.$router.push({name: 'TestDetail', params: {id: obj.id}})
    },
    logout() {
      this.$store.commit('logout')
      this.$router.push({name: 'Index'})
    }
  }
}
</script>

<style scoped>
  h2 {
    font-size: 38px;
    font-weight: 500;
  }
  h3 {
    font-size: 24px;
  }

  .profile-page {
    width: 100%
  }
  .section-header {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
