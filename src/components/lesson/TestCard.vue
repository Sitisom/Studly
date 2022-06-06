<template>
  <div class="card-body">
    <h5 class="title"><b>{{ question }}</b></h5>
    <div class="variants">
      <div v-for="variant in variants" :key="variant.id" class="variant-item form-check">
        <input type="radio" class="form-check-input"
               :id="`task-${id}-variant-${variant.id}`"
               :name="`task-${id}`"
               :value="variant.id"
               :checked="variant.text === given_answer"
               :disabled="given_answer"
               v-model='testAnswer'
        >
        <label class="form-check-label" :for="`task-${id}-variant-${variant.id}`">{{ variant.text }}</label>
      </div>
    </div>
    <input type="button" class="btn btn-success mt-3" value="Ответить"
           v-if="!given_answer" @click="answer">
    <div class="points" v-if='given_answer'>
      Набрано баллов <span class="result text-info">{{ points }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TestCard',
  props: ['id', 'question', 'given_answer', 'points', 'variants'],
  data() {
    return {
      testAnswer: ''
    }
  },
  methods: {
    answer() {
      axios.put(
        `${this.$store.state.hostname}/lesson/task/${this.id}/`,
        {task_id: this.id, answer: this.testAnswer},
          {headers: this.$store.getters.getAuthHeader}
      ).then(response => response.data).then(data => {
          this.$emit('update', data)
        }
      )
    }
  }
}
</script>

<style scoped>

</style>