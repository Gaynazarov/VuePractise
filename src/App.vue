<template>
  <div>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <h4>Открыто: {{ openRate }} | Прочитано: {{ readRate }}</h4>

      </div>
    </div>
    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        @open-news="openNews"
        @read-news="readNews"
    />
  </div>

</template>
<script>
import AppNews from './components/AppNews.vue'

export default {
  data() {
    return {
      openRate: 0,
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Новость 1',
          id: 1,
          isOpen: false
        },
        {
          title: 'Новость 2',
          id: 2,
          isOpen: false
        },
        {
          title: 'Новость 3',
          id: 3,
          isOpen: false
        }
      ]
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(){
      this.readRate++
    }
  },
  components: {
    AppNews
  },
}

</script>

<style scoped>

</style>
