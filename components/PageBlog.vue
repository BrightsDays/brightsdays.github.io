<template>
  <vue-details class="blog" :title="'Мой блог'">
    <div class="blog__wrap">
      <div v-for="list in postsList" :key="list.title" class="blog__section">
        <template v-if="list.posts[0]">
          <h3 class="heading--small">
            {{ list.title }}
          </h3>
          <ul class="list">
            <li
              v-for="item in list.posts"
              :key="item.name"
              class="list__item"
            >
              <a class="link" :href="item.path">{{ item.name }}</a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </vue-details>
</template>

<script>
import VueDetails from '../layouts/BlogDetails.vue'

export default {
  components: {
    VueDetails
  },
  data () {
    return {
      postsList: {},
      tempList: {}
    }
  },
  async mounted () {
    await this.loadList()
    this.postsList = this.tempList
  },
  methods: {
    async loadList () {
      const list = await this.$content({ deep: true })
        .sortBy('createdAt', 'asc')
        .fetch()

      list.forEach((item) => {
        if (!(item.category in this.tempList)) {
          this.tempList[item.category] = {
            title: item.categoryTitle ?? item.category.charAt(0).toUpperCase() + item.category.slice(1),
            posts: []
          }
        }

        const settings = {
          name: item.title ?? item.slug.charAt(0).toUpperCase() + item.slug.slice(1),
          path: item.path
        }

        this.tempList[item.category].posts.push(settings)
      })
    }
  }
}
</script>

<style lang="sass">
.blog
  &__wrap
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    gap: 20px

  &__section
    flex: 1 1 45%
</style>
