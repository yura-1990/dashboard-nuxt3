<template>
  <div>
    Theme
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "#app";

const token = ref()
const router = useRouter()

onMounted(async ()=>{
  // try {
  //   const token = localStorage.getItem('token')
  //   if (token){
  //     const {data, error} = await useFetch('http://localhost:8000/api/users/me', {
  //       method: 'get',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });

  //     if (error.value){
  //       localStorage.setItem('token', '')
  //       return await router.push({name: 'auth-login'})
  //     }

  //   }else {
  //     return await router.push({name: 'auth-login'})
  //   }
  // }catch (e){
  //   localStorage.setItem('token', '')
  //   return await router.push({name: 'auth-login'})
  // }
})
</script>

<style>

</style>
