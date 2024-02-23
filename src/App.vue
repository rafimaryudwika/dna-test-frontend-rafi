<script async setup lang="ts">
import { ref } from 'vue';
import fetchAPI from './api/newsApi'
import type {articles} from './interfaces/NewsAPIInterface'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import NewsGrid from './components/NewsGrid.vue'
import BigNewsSkeleton from './components/BigNewsSkeleton.vue';
const tist = ref<articles[]>([]);

// Fetch data when the component is mounted
onMounted(async () => {
  initFlowbite();
  fetchNewsData()
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
      tist.value = response
    
  } catch (error) {
    throw new Error('Failed to fetch news data');
  }
}

</script>

<template>
  <div class="m-6">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">NewsPortal.com</h1>
  </div>
 
  <Suspense  >
    <NewsGrid />
    
    <template #fallback>
<div>
  <div class="max-w-md p-4 mx-auto">

    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
  </div>
  <div class="grid grid-cols-2 m-4 h-[95vh]">
        <BigNewsSkeleton />
        <BigNewsSkeleton />
        <BigNewsSkeleton />
        <BigNewsSkeleton />
      </div>
</div>

    </template>
  </Suspense>

</template>
