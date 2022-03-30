<template>
  <div class="rate-plan-block">
    <h1>Выбор подписки</h1>
    <div class="plan-items">
      <plan-item
          title="Базовый"
          description="----"
          price="0"
          :by_month="false"
          :is_active="!$store.state.user.profile.subscription"
      />
      <plan-item
          v-for="plan in plans.results"
          :key="plan.id"
          v-bind="plan"
      />
    </div>
  </div>
</template>

<script>
import planItem from "@/components/rate-plan/planItem";
import Http from "@/mixins/Http";

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
  }
}
</script>

<style scoped>
.rate-plan-block {
  padding: 16px 64px;
}
</style>