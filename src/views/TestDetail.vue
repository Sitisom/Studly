<template>
  <Core>
    <div class="test-detail-page text-left py-4">
      <h1>{{ lesson.title }}</h1>
      <div v-if="!loading" class="lesson-content">
        <div class="attachment-video" v-if="lesson.attachments.video_url">
          <iframe width="560" height="315" :src="lesson.attachments.video_url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div v-if="lesson.attachments.text" class="context-text">
          {{ lesson.attachments.text }}
        </div>
        <div class="file-download my-4" v-if="lesson.attachments.file">
          <a :href="lesson.attachments.file" download>Скачать дополнительный материал</a>
        </div>
      </div>
      <div v-if="!loading" class="tasks">
        <h2>Тест к уроку</h2>
        <div class="card mb-3" v-for="task in lesson.test.tasks" :key="task.id">
          <div class="card-body">
            <h5 class="title"><b>{{ task.question }}</b></h5>
            <div class="variants">
              <div v-for="variant in task.variants" :key="variant.id" class="variant-item form-check">
                <input type="radio" class="form-check-input"
                       :id="`task-${task.id}-variant-${variant.id}`"
                       :name="`task-${task.id}`"
                       :value="variant.text"
                       :checked="variant.text === task.given_answer"
                       :disabled="task.given_answer">
                <label class="form-check-label" :for="`task-${task.id}-variant-${variant.id}`">{{ variant.text }}</label>
              </div>
            </div>
            <input type="button" class="btn btn-success" value="Ответить" v-if="!task.given_answer" @click="answer(task.id, $event)">
            <div class="points" :class="{'d-none': task.points}">
              Набрано баллов <span class="result text-info">{{ task.points }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Core>
</template>

<script>
import $ from 'jquery'

import Http from "@/mixins/Http";
import Core from "@/views/Core";

export default {
  name: "TestDetail",
  components: {Core},
  mixins: [Http],
  data: function () {
    return {
      lesson: {},
      loading: false,
    }
  },
  created() {
    this.loading = true;
    $.ajax({
      url: `${this.$store.getters.hostname}/tests/assignments/${this.$route.params.id}`,
      headers: this.$store.getters.getAuthHeader,
      method: 'GET',
      success: (data) => {
        this.lesson = data;
        this.loading = false;
      }
    })
  },
  methods:{
    answer(task_id) {
      let answer = $('input[name=task-' + task_id + ']:checked');
      $.ajax({
        url: `${this.$store.getters.hostname}/tests/task/${task_id}/`,
        method: 'PUT',
        headers: this.$store.getters.getAuthHeader,
        data: {task_id, answer: answer.val()},
        success: function (data) {
          let points = data.points;
          answer.closest('.card-body').find('.points').attr('hidden', false).find('.results').text(points);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>