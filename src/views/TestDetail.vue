<template>
  <BaseView>
    <div class="test-detail-page text-left py-4">
      <div v-if="!loading" class="tasks">
        <h2>Тест к уроку "{{ lesson.title }}"</h2>
        <div class="card mb-3" v-for="task in lesson.tasks" :key="task.id">
          <TestCard v-bind='task' @update='update'></TestCard>
        </div>
      </div>
    </div>
  </BaseView>
</template>

<script>

import Http from "@/mixins/Http";
import BaseView from "@/components/BaseView"
import axios from 'axios'
import TestCard from '@/components/lesson/TestCard'

export default {
  name: "TestDetail",
  components: {BaseView, TestCard},
  mixins: [Http],
  data: function () {
    return {
      lesson: {
        tasks: [
          {
            id: '',
            question: '',
            points: 0,
            given_answer: ''
          }
        ]
      },
      loading: false,
    }
  },
  created() {
    this.loading = true;
    axios.get(
        this.$store.state.hostname + '/lesson/' + this.$route.params.id,
        {headers: this.$store.getters.getAuthHeader},
    ).then(response => response.data).then((data) => {
        this.lesson = data;
        this.loading = false;
      })
  },
  methods: {
    update(data) {
      let task = this.lesson.tasks.find(obj => obj.id === parseInt(data.task))
      task.given_answer = data.given_answer
      task.points = data.points
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>

</style>