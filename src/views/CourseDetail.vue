<template>
  <BaseView>
    <header class="w-100">
      <h1>{{details.title}}</h1>
    </header>
    <main>
      <section class="description">
        <p class="">
          Автор: {{details.teacher.full_name}}
        </p>
        <p>
          Уровень: {{details.rate_plan.title}}
        </p>
        <p class="d-flex flex-row">
          Сложность:
          <Difficulty
            :difficulty="details.difficulty"
            class="ml-2"
            style="margin-top: 3px"
            height="20px"
          />
        </p>
        <p>
          Количество уроков: {{details.lessons_count}}
        </p>
        <p>
          Количество заданий: {{details.tasks_count}}
        </p>
        <p>Описание:</p>
        <p>{{details.description}}</p>
      </section>
      <button v-if="!details.subscribed && details.rate_plan.order <= $store.state.user.profile.subscription.rate_plan.order"
              @click="subscribe"
              class="d-block mx-auto btn btn-success">
        Записаться
      </button>
      <router-link class="d-block mx-auto btn btn-success" :to="{name: 'Lesson'}">Перейти к урокам</router-link>
    </main>
  </BaseView>
</template>

<script>
import Http from "@/mixins/Http";
import BaseView from "@/components/BaseView";
import Difficulty from "@/components/course/Difficulty";
import axios from "axios";

export default {
  name: "CourseDetail",
  props: ["id"],
  components: {BaseView, Difficulty},
  mixins: [Http],
  data() {
    return {
      details: {
        id: '',
        title: "Лучший урок на свете!",
        rate_plan: {
          title: '',
          order: 0
        },
        description: '',
        difficulty: 1,
        teacher: {
          full_name: "Учитель Учителей"
        },
        lessons: [],
        lessons_count: 0,
        tasks_count: 0,
        subscribed: false,
        url: this.$store.state.hostname + this.$store.state.endpoints.course.list + this.id,
        loading: false
      }
    }
  },
  created() {
    this.detailsHttp = new this.http(
        this.$store.getters.getToken,
        this.details,
        (model, data) => Object.keys(data).forEach((key) => model[key] = data[key]))
  },
  mounted() {
    this.detailsHttp.getNew()
  },
  methods: {
    subscribe() {
      axios.post(
          this.$store.state.hostname + this.$store.state.endpoints.course.subscribe,
          {id: this.id},
          {headers: this.$store.getters.getAuthHeader}
      ).then((data) => {
        if (data.status === 201)
          this.details.subscribed = true;
      })
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.description {
  overflow-wrap: normal;
}
.description p {
  margin-bottom: 8px;
}
</style>