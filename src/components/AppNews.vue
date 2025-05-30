<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <div v-if="isNewsOpen">
      <hr />
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rem?</p>
      <button
          class="btn primary"
          @click="noteRead"
      >
        Прочесть новость
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNews',
  props: {
    title: String,
    id: Number,
    isOpen: Boolean
  },
  emits:['open-news', 'read-news'],
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    noteRead(){
      this.isNewsOpen = false
      this.$emit('read-news')
    }
  }
}
</script>