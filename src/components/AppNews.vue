<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <button class="btn danger"
            @click="$emit('unread', id)"
            v-if="wasRead"
    >
      Отметить как не прочитанно!
    </button>
    <div v-if="isNewsOpen">
      <hr />
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rem?</p>
      <button
          class="btn primary"
          @click="noteRead"
          v-if="!wasRead"
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
    wasRead: Boolean,
    title: String,
    id: Number,
    isOpen: Boolean
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      return false
    },
    'unread':null
  },
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
    noteRead(id){
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // noteUnread(id){
    //   this.$emit("unread", this.id)
    //   this.isNewsOpen =false
    // }
  }
}
</script>