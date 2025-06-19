<template>
  <div class="container pt-1">
    <div class="card">
      <app-async-component></app-async-component>
      <h2>Динамические и асинхронные компоненты</h2>
      <app-button
          :color="oneColor"
          @action="active = 'one'"
      >
        one
      </app-button>
      <app-button
          :color="twoColor"
          @action="active = 'two'"
      >
        two
      </app-button>
    </div>
    <keep-alive>
    <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>
<script>

import AppButton from "./components/AppButton.vue";
import appTestOne from "./components/AppTestOne.vue";
import appTestTwo from "./components/AppTestTwo.vue";
import AppAsyncComponent from "./components/AppAsyncComponent.vue";

export default {
  components: {AppAsyncComponent, AppButton, appTestOne, appTestTwo},

  data() {
    return {
      active: 'one', // two
    }
  },
  mounted() {
    // setTimeout(() =>{
    //   this.componentName = 'new component name'
    // }, 1500)
  },
  computed: {
    componentName: {
      get() {
      return 'app-test-' + this.active
      },
      set(value) {
        return console.log('componentName:', value)
      }
    },
    oneColor(){
      return this.active === 'one' ? 'primary': ''
    },
    twoColor(){
      return this.active === 'two' ? 'primary': ''
    },
    },

}

</script>

<style scoped>

</style>
