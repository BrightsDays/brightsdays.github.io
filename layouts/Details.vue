<template lang="pug">
  details.details
    summary.summary {{ title }}
    slot
</template>

<script>
export default {
  props: {
    title: {type: String}
  }
}
</script>

<style lang="sass">
.details
  padding: 15px
  border-top: 1px solid var(--summary)
  border-bottom: 1px solid var(--summary)
  margin-top: -1px

  &[open]
    .summary
      &:before
        transform: rotate(40deg)

      &:after
        transform: rotate(-40deg)

.summary
  position: relative
  list-style: none
  font-size: 2.2em
  font-weight: 500
  cursor: pointer
  transition: padding 0.3s

  &::-webkit-details-marker
    display: none

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
    right: 12px
    width: 15px
    transform: rotate(40deg)
</style>