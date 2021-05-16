<template lang="pug">
  .container
    Card

    .content
      Info
      Work
      Portfolio
      MyBlog
</template>

<style lang="sass">
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