<template>
  <Core>
    <div class="test-detail-page">
      <div class="card" v-for="task in $route.params.test" :key="task.id">
        {{ task }}
      </div>
    </div>
  </Core>
</template>

<script>
import Http from "@/mixins/Http";
import Core from "@/views/Core";

export default {
  name: "TestDetail",
  components: {Core},
  mixins: [Http],

}
</script>

<style scoped>

</style>