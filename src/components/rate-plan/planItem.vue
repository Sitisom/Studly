<template>
  <div class="plan-item" :class="{is_active:'active'}">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="price-block">
      <span>{{ price > 0 ? price + " руб.": "Бесплатно" }}</span><br>
      <span>{{ by_month ? "На месяц": "Навсегда" }}</span>
    </div>
    <div class="buttons-block">
      <button class="btn purchase-button" v-if="!is_active">Купить</button>
      <div class="btn active-button">Активно</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "planItem",
  props: ["title", "description", "price", "by_month", "is_active"]
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
</style>