<script setup lang="ts">
const props = defineProps({
  links: {
    type: Object,
    required: true
  }
})
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
</script>

<template>

  <!-- Breadcrumb -->
  <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 active-link dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li v-for="(item, index) in props.links" :key="index" class="inline-flex items-center">
        <ULink
            class="inline-flex gap-2 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            active-class="text-white dark:text-white"
            :to="item.to"
        >
          <Icon :name="item.icon.name" :size="item.icon.size" />
          {{ $t(item.title) }}
          <Icon v-if="currentRoute.path !== item.to" name="material-symbols:arrow-forward-ios" :size="item.icon.size" />
        </ULink>
      </li>
    </ol>
  </nav>


</template>

<style scoped>

</style>
