<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <app-button @action="open">{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
    <app-button color="danger"
                @action="$emit('unread', id)"
                v-if="wasRead"
    >Отметить как не прочитанно!
    </app-button>
    <div v-if="isNewsOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, rem?</p>
      <app-button
          color="primary"
          @action="noteRead"
          v-if="!wasRead"
      >Прочесть новость
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";

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
    'unread': null
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
    noteRead(id) {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // noteUnread(id){
    //   this.$emit("unread", this.id)
    //   this.isNewsOpen =false
    // }
  },
  components: {AppButton}
}
</script>