
<script setup lang="ts">

import type { articles } from '../interfaces/NewsAPIInterface'
defineProps<{
    textPosition?: "top" | "bottom"
    article?: articles
}>()
</script>
<template>
    <div class="p-4">

        <div class="bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div v-if="textPosition === 'top'" class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ article?.title }}
                    </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ article?.content }}</p>
            </div>
            <a :href="article?.url" target="_blank">

                <div class="aspect-[3/2]">
                    <Suspense>
                    <template #default>
                        <img class="rounded-t-lg aspect-[3/2] object-cover" :src=article?.urlToImage alt="" />
                    </template>
                    <template #fallback>
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </template>
                    </Suspense>
                </div>
            </a>
                
            <div v-if="textPosition === 'bottom' || 'undefined'" class="aspect-[3.48979592] p-5">
                <Suspense>
                    <template #default>
                        <div>

                            <a :href="article?.url" target="_blank">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                                    article?.title }}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ article?.content }}</p>
                        </div>

                    </template>
                    <template #fallback>
                        <div class="animate-pulse">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5 "></div>
                        </div>
                    </template>
                </Suspense>
            </div>

        </div>
    </div>
</template>