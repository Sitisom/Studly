<template>
  <div class="profile-page">
    <div class="row">
      <div class="col py-3 text-left">
        <div class="inner-header">
          <h2>Личный кабинет ученика</h2>
        </div>
      </div>
    </div>
    <section class="row">
      <div class="col">
        <div class="section-header d-flex justify-content-between">
          <h3>Пройденные тесты</h3>
          <a href="">Все пройденные тесты</a>
        </div>
        <div class="tests row" v-if="tests.results">
          <div class='col-6 col-md-3' v-for="test in tests.results" :key="test.id" @click="testDetail(test)">
            <lessonCard :id="test.id"
                  :title="test.title"
                  :teacher="test.teacher"
                  :count="test.count"
                  :status="test.status"></lessonCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Http from '@/mixins/Http'
import lessonCard from "@/components/tests/lessonCard";

export default {
  name: 'Profile',
  components: {lessonCard},
  mixins: [Http],
  data() {
    return {
      tests: {
        count: 0,
        results: [],
        next: '',
        url: this.$store.getters.hostname + '/tests/assignments',
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
    this.http = new this.http(this.$store.getters.getToken, this.tests);
  },
  mounted() {
    this.http.getNew();

  },
  methods: {
    testDetail: function (obj) {
      this.$router.push({name: 'TestDetail', params: {id: obj.id}})
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
</style>
