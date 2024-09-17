<template>
  <div class="newsSection">
    <h2>Новости</h2>
    <div v-for="newsItem in news" :key="newsItem.id" class="news-item">
      <h3>{{ newsItem.title }}</h3>
      <p>{{ newsItem.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        { id: 1, title: 'Заголовок 1', description: 'Описание новости 1' },
        { id: 2, title: 'Заголовок 2', description: 'Описание новости 2' },
        // Добавьте остальные новости
      ]
    }
  }
}
</script>
