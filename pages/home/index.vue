<template>
  <div>
    <Table />
  </div>
</template>

<script setup lang="ts">
import Table from "~/components/tables/table.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "#app";

const token = ref()
const router = useRouter()




</script>

<style>

</style>
