<script async setup lang="ts">
import { reactive } from 'vue';
import fetchAPI from './api/newsApi'
import type {articles} from './interfaces/NewsAPIInterface'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import BigNewsCard from "./components/BigNewsCard.vue"
const tist = reactive([]) as articles[];

// Fetch data when the component is mounted
onMounted(async () => {
  initFlowbite();
  try {
    const response = await fetchNewsData();
    tist.push(...response);
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
});

// Fetch news data from the API
async function fetchNewsData() {
  try {
    const apiKey = '8f34171447df4238802e3d9cb3a404c1';
    const query = 'Apple';
    const sortBy = 'popularity';

    const response = await fetchAPI<articles[]>({
      type: 'everything',
      query: { apiKey, q: query, sortBy },
      wrappedByKey: 'articles',
    });

    return response;
  } catch (error) {
    throw new Error('Failed to fetch news data');
  }
}

</script>

<template>
  <div class="m-6">
    <h1 class="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">NewsPortal.com</h1>
  </div>
<div class="grid grid-cols-2 m-4 h-[95vh]">
  <BigNewsCard v-for="article in tist" :key="article.title" :article="article" />
</div>

</template>
