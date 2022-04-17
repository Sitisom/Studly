<template>
  <div class="plan-item" :class="{is_active:'active'}">
    <h3>{{ title }}</h3>
    <div class="desc-block">
      <h6>Описание</h6>
      <p v-html="description"></p>
    </div>

    <div class="bottom-block">
      <div class="price-block">
        <span>{{ isFree ? price + " руб.": "Бесплатно" }}</span><br>
        <span>{{ isFree ? "На месяц": "Навсегда" }}</span>
      </div>
      <div class="buttons-block">
        <div v-if="!current && order < currentPlan.id" class="btn active-button">Недоступно</div>
        <button v-else-if="!current"
                class="btn purchase-button"
                @click="$emit('purchase', id, price)">
          Купить</button>
        <div v-else class="btn active-button">Активно</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planItem",
  props: ["id", "title", "description", "price", "by_month", "is_active", "current", "order", "currentPlan"],
  computed: {
    isFree() {
      return this.price !== 0
    }
  }
}
</script>

<style scoped>
.plan-item {
  display: flex;
  flex-direction: column;

  flex: 1 1 0px;
  max-width: 300px;
  padding: 16px;

  text-align: center;

  border-radius: 4px;
  border: 1px solid gray;
}

.purchase-button {
  background-color: #007bff;
  color: white;
}

.active-button {
  background-color: lightgray;
  color: gray;
  cursor: none;
}

.desc-block {
  margin-top: 16px;
}

.bottom-block {
  margin-top: auto;
}
</style>