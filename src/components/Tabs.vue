<template>
  <div class="tabs-container">
      <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-button', {active: currentTab === tab}]"
          @click = "$emit('change-tab', tab)"
      >{{ tab }}</button>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    currentTab: {
      type: String,
      default: 'current'
    },
    changeTab: {
      type: Function,
      default: (tab) => { console.log(tab) }
    }
  }
}
</script>

<style scoped>

button {
  background-color: transparent;
  border: none;
  padding: 4px 8px;
}

button.active {
  border-bottom: 3px #007bff solid;
}

</style>