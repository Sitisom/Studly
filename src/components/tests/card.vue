<template>
    <div class="card">
      <div class="card-body text-left">
        <div class="card-title">{{ title }}</div>
        <div class="teacher">{{ teacher.first_name }} {{ teacher.last_name }}</div>
        <div class="status">{{ rus_status }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "card",
  props: ['id', 'title', 'teacher', 'status'],
  computed: {
    rus_status: function () {
      switch (this.status){
        case 'UNDONE':
          return 'Не сделано'
        case 'DONE':
          return 'Ожидает проверки'
        case 'CHECKED_BY_TEACHER':
          return 'Проверено учителем'
        default:
          return 'Статус не определен'
      }
    }
  }
}
</script>

<style scoped>
  .card {
    min-height: 100%;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  a:hover .card {
    border-color: #007bff;
  }
</style>