
<script setup lang="ts">

import type { articles } from '../interfaces/NewsAPIInterface'
defineProps<{
    textPosition?: "top" | "bottom"
    article?: articles
    isLoading?: boolean
}>()
</script>
<template>
    <div class="p-4">

        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" target="_blank">

                <div class="aspect-[3/2]">

                        <svg class="w-10 h-10 mx-auto my-auto text-gray-200 animate pulse dark:text-gray-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path
                                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                </div>
            </a>
                
            <div class="aspect-[3.48979592] p-5">
                        <div class="animate-pulse">
                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
                            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5 "></div>
                        </div>
            </div>

        </div>
    </div>
</template>