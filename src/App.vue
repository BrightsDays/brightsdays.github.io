<template>
  <div class="container">
    <page-card />
    <router-view />
  </div>
</template>

<script>
import PageCard from './components/PageCard.vue';
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    PageCard
  },
  created() {
    window.addEventListener("resize", this.changeType);
  },
  destroyed() {
    window.removeEventListener("resize", this.changeType);
  },
  methods: {
    changeType() {
      this.$store.commit('changeType', window.innerWidth);
    }
  }
})

export default class App extends Vue {}
</script>

<style lang="sass">
@import './assets/sass/main.sass'

.container
  display: flex
  flex-wrap: wrap
  margin: 0 auto
  padding: 40px 0
  width: 1100px
  max-width: 100%
  gap: 30px

  @media ($tablet)
    padding: 15px 0
</style>