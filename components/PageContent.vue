<template>
  <div class="content">
    <div class="info">
      <h1 class="heading--big">
        {{ $t('hello') }}! &#128075;
      </h1>
      <p class="paragraph">
        {{ $t('hello_content') }}
      </p>
    </div>
    <blog-details :title="$t('about')">
      <p class="paragraph">
        {{ $t('about_content_1') }}
      </p>
      <p class="paragraph">
        {{ $t('about_content_2') }}
      </p>
      <p class="paragraph">
        {{ $t('about_content_3') }}
      </p>
    </blog-details>
    <blog-details class="work" :title="'Опыт работы'">
      <ul class="list">
        <li class="list__item">
          <ul class="work__info">
            <p>
              <i>2021-2022</i> - <b>ExtTeam</b>, Frontend Developer
            </p>
            <p>
              - {{ $t('work_content_1_1') }};
            </p>
            <p>
              - {{ $t('work_content_1_2') }};
            </p>
            <p>
              - {{ $t('work_content_1_3') }}.
            </p>
          </ul>
        </li>
        <li class="list__item">
          <ul class="work__info">
            <p>
              <i>2020-2021</i> - <b>AdCombo</b>, HTML/CSS Developer
            </p>
            <p>
              - {{ $t('work_content_2_1') }};
            </p>
            <p>
              - {{ $t('work_content_2_2') }};
            </p>
            <p>
              - {{ $t('work_content_2_3') }}.
            </p>
          </ul>
        </li>
      </ul>
    </blog-details>
  </div>
</template>

<script lang="ts">
import BlogDetails from '../layouts/BlogDetails.vue'

export default {
  components: {
    BlogDetails
  }
}
</script>

<style lang="scss">
.info {
  padding: 0 1.5em;
  margin-bottom: 1.5em;
}

.work {
  &__info {
    padding-top: 0.5em;
    font-size: inherit;

    p {
      font-size: 1em;
      line-height: 1.2em;
      margin-top: 0.3em;
    }
  }
}
</style>
