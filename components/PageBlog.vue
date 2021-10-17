<template>
  <vue-details class="blog" :title="'Мой блог'">
    <div class="blog__wrap">
      <template v-for="list in postsLists">
        <div :key="list.name" class="blog__section">
          <h3 class="heading--small">
            {{ list.name }}
          </h3>
          <ul class="list">
            <li
              v-for="(item, i) in list.posts"
              :key="i"
              class="list__item"
            >
              <a class="link" :href="item.path">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </template>
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
      postsLists: {
        oldSchoolList: {
          name: 'Old School Magic',
          posts: []
        },
        magicList: {
          name: 'Magic: the Gathering',
          posts: []
        }
      }
    }
  },
  beforeMount () {
    this.loadList()
  },
  methods: {
    async loadList () {
      const list = await this.$content({ deep: true })
        .sortBy('createdAt', 'asc')
        .fetch()

      list.forEach((item) => {
        const settings = {
          name: item.title ?? item.slug.charAt(0).toUpperCase() + item.slug.slice(1),
          path: item.path
        }

        item.dir === '/magic'
          ? this.postsLists.magicList.posts.push(settings)
          : this.postsLists.oldSchoolList.posts.push(settings)
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
