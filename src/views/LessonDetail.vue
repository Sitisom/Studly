<template>
  <BaseView>
    <div v-if='ready' class="test-detail-page text-left py-4">
      <div class=''>
        <div class='d-flex flex-row justify-content-between mr-5'>
          <h1>{{ lesson.title }}</h1>
          <router-link class='btn btn-info d-flex' :to='{name: "TestDetails", params: {id: lesson.id}}'>Пройти тест</router-link>
        </div>
        <p>{{ lesson.description }}</p>
      </div>
      <div class="lesson-content" v-for='attachment in lesson.attachments' :key='attachment.id'>
        <div v-if="attachment.video_url">
<!--          <h2>Видеоматериал</h2>-->
          <div class="attachment-video">
            <iframe width="560" height="315" :src="attachment.video_url" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>
        <div v-if="attachment.text" >
          <h2>Теория</h2>
          <div class="context-text w-100" style='overflow-wrap: break-word;' v-html='attachment.text'></div>
        </div>

        <div class="file-download my-4" v-if="attachment.file">
          <a :href="attachment.file" download>Скачать дополнительный материал</a>
        </div>
      </div>
<!--      <div v-if="!loading" class="tasks">-->
<!--        <h2>Тест к уроку</h2>-->
<!--        <div class="card mb-3" v-for="task in lesson.test.tasks" :key="task.id">-->
<!--          <div class="card-body">-->
<!--            <h5 class="title"><b>{{ task.question }}</b></h5>-->
<!--            <div class="variants">-->
<!--              <div v-for="variant in task.variants" :key="variant.id" class="variant-item form-check">-->
<!--                <input type="radio" class="form-check-input"-->
<!--                       :id="`task-${task.id}-variant-${variant.id}`"-->
<!--                       :name="`task-${task.id}`"-->
<!--                       :value="variant.text"-->
<!--                       :checked="variant.text === task.given_answer"-->
<!--                       :disabled="task.given_answer">-->
<!--                <label class="form-check-label" :for="`task-${task.id}-variant-${variant.id}`">{{ variant.text }}</label>-->
<!--              </div>-->
<!--            </div>-->
<!--            <input type="button" class="btn btn-success" value="Ответить" v-if="!task.given_answer" @click="answer(task.id, $event)">-->
<!--            <div class="points" :class="{'d-none': task.points}">-->
<!--              Набрано баллов <span class="result text-info">{{ task.points }}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </BaseView>
</template>

<script>
import BaseView from "@/components/BaseView";
import Http from '@/mixins/Http'
import axios from 'axios'

export default {
  name: "LessonDetail",
  mixins: [Http],
  components: {BaseView},
  data() {
    return {
      lesson: {
        id: 0,
        title: '',
        description: '',
        tasks: [],
        attachments: [
          {
            id: '',
            text: '',
            video_url: ''
          }
        ],
        url: this.$store.state.hostname + this.$store.state.lesson.endpoints.list + this.$route.params.id,
        loading: false
      },
      ready: false
    }
  },
  created() {
    this.getLesson()
  },
  mounted() {
    setTimeout(() => {
      axios.post(
          this.lesson.url + '/watched/',
          {headers: this.$store.getters.getAuthHeader}
      )
    }, 500)
  },
  methods: {
    getLesson() {
      this.lesson.loading = true
      axios.get(
        this.lesson.url,
        {headers: this.$store.getters.getAuthHeader}
      ).then(
          response => response.data
      ).then(
          data => {
            this.lesson = Object.assign(this.lesson, data)
            this.loading = false
            this.ready = true
          }
      )
    }
  }
}
</script>

<style scoped>

</style>