<template>
  <vue-details class="blog" :title="'Мой блог'">
    <div class="blog__wrap">
      <div v-for="list in library" :key="list.title" class="blog__section">
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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import VueDetails from '../layouts/BlogDetails.vue'

interface Article {
  slug: string,
  title?: string,
  category?: string,
  categoryTitle?: string,
  createdAt?: string,
  dir?: string,
  extension?: string,
  path?: string,
  toc?: object[]
}
interface Category {
  title: string,
  posts: object[]
}
interface Library {
  library: {[s: string]: Category}
}

export default defineComponent({
  components: {
    VueDetails
  },
  data () {
    return {
      library: {}
    } as Library
  },
  async mounted () {
    await this.loadList()
  },
  methods: {
    async loadList () {
      const tempList: {[s: string]: Category} = {}

      const list = await this.$content({ deep: true })
        .sortBy('createdAt', 'asc')
        .fetch()

      list.forEach((item: Article | undefined) => {
        if (item) {
          if (item.category && !(item.category in tempList)) {
            tempList[item.category] = {
              title: item.categoryTitle ?? item.category.charAt(0).toUpperCase() + item.category.slice(1),
              posts: []
            }
          }

          const settings = {
            name: item.title ?? item.slug.charAt(0).toUpperCase() + item.slug.slice(1),
            path: item.path
          }

          if (item.category) { tempList[item.category].posts.push(settings) }
        }
      })

      this.library = tempList
    }
  }
})
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
