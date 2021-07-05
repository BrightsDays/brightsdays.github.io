<template lang="pug">
  .details
    .details__summary(:class="{'details__summary--open':isOpen}"
      @click="isOpen = !isOpen") {{ title }}
    transition(name="fade")
      .details__content(v-if="isOpen")
        slot
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      isOpen: true
    }
  },
  props: {
    title: {type: String}
  },
  computed: {
    ...mapState(['adaptive']),
    deviceType() {
      return this.adaptive.deviceType;
    }
  },
  watch: {
    deviceType: function () {
      this.isOpen = this.deviceType === 'desktop'
    }
  },
  mounted() {
    this.isOpen = this.deviceType === 'desktop'
  }
}
</script>

<style lang="sass">
.details
  padding: 15px
  border-top: 1px solid var(--summary)
  border-bottom: 1px solid var(--summary)
  margin-top: -1px

  &__summary
    position: relative
    list-style: none
    font-size: 2.2em
    font-weight: 500
    cursor: pointer
    transition: padding 0.3s

    &:before, &:after
      content: ''
      position: absolute
      border-top: 2px solid var(--text)
      transition: transform 0.4s

    &:before
      top: 12px
      right: 0
      width: 15px
      transform: rotate(-40deg)

    &:after
      top: 12px
      right: 11px
      width: 15px
      transform: rotate(40deg)

    &--open
      &:before
        transform: rotate(40deg)

      &:after
        transform: rotate(-40deg)
</style>