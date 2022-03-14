<template>
  <div class="container">
    <page-card />
    <page-content />
  </div>
</template>

<script lang="ts">
import PageCard from '../components/PageCard.vue'
import PageContent from '../components/PageContent.vue'

export default {
  components: {
    PageCard,
    PageContent
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 40px 0;
  width: 1100px;
  max-width: 100%;
  gap: 30px;

  @media ($tablet) {
    padding: 15px 0;
  }
}
</style>
