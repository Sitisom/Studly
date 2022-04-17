<template>
  <div class="rate-plan-block">
    <h1>Выбор подписки</h1>
    <div class="plan-items">
      <plan-item
          v-for="plan in plans.results"
          :key="plan.id"
          v-bind="plan"
          @purchase="purchase"
          :current-plan="currentPlan"
      />
    </div>
    <button class="btn btn-success continue-button" @click="$router.push({ name: 'Profile'})">
      Далее
    </button>
  </div>
</template>

<script>
import planItem from "@/components/rate-plan/planItem";
import Http from "@/mixins/Http";
import axios from "axios";

export default {
  name: "RatePlan",
  components: {planItem},
  mixins: [Http],
  data() {
    return {
      plans: {
        results: [],
        url: this.$store.state.hostname + this.$store.state.endpoints.rate_plan.list,
        loading: false,
        count: 0
      }
    }
  },
  created() {
    this.plansHttp = new this.http(this.$store.getters.getToken, this.plans)
  },
  mounted() {
    this.plansHttp.getNew()
  },
  methods: {
    getBaseDescription() {
      return `
      - Доступно 10% курсов<br>
      - Постоянная связь с куратором в соцсетях!
      `
    },
    purchase(id, price) {
      axios.post(
          this.$store.state.hostname + this.$store.state.endpoints.rate_plan.purchase,
          {id, price},
          {
            headers: this.$store.getters.getAuthHeader
          }
      ).then(resp => console.log(resp))
    }
  },
  computed: {
    currentPlan() {
      return this.plans.results.find(
          item => item.current
      )
    }
  }
}
</script>

<style scoped>
.rate-plan-block {
  padding: 16px 64px;
}
.plan-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 32px;
}

.continue-button {
  margin-top: 92px;
  padding: 12px 46px
}
</style>