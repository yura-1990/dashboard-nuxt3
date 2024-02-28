<template>
  <div>
    <Table />

  </div>
</template>

<script setup lang="ts">
import Table from "~/components/tables/table.vue";
definePageMeta({
  middleware: ['ability']
})

</script>

<style>

</style>
