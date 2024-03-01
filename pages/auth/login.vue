<script setup lang="ts">
  definePageMeta({
    layout: 'auth-layout'
  })

  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/useAuthStore';
  const { authenticated, error, loading, permissions } = storeToRefs(useAuthStore());
  const { authenticateUser } = useAuthStore()

  const state = reactive({
    email: undefined,
    password: undefined
  })

  const router = useRouter();

  const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string().min(6, 'Must be at least 8 characters').required('Required')
  })

  type Schema = InferType<typeof schema>

  async function onSubmit (event: FormSubmitEvent<Schema>) {
    await authenticateUser(event.data);

    if (authenticated) {
      location.href = '/'
      await router.push('/');
    }
  }

</script>

<template>
  <div class="flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-[#2f2b3dc7]">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md dark:bg-[#2F3349FF] border">
      <h1 class="text-2xl font-bold text-center"> Log in to your account</h1>
      <UAlert
          v-if="error"
          icon="i-heroicons-command-line"
          color="red"
          variant="solid"
          title="Error"
          :description="error"
      />
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" autocomplete />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" autocomplete />
        </UFormGroup>

        <UButton type="submit" class="w-full" block >
          Submit
        </UButton>
      </UForm>

      <div class="relative pt-1">
        <div class="flex justify-center">
          <span class="px-2 text-sm text-gray-500 bg-white dark:text-white dark:bg-transparent">Or continue with</span>
        </div>
      </div>

      <button
          class="flex items-center dark:bg-[#2F3349FF] dark:text-white justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="button"
      >
        <UIcon name="logos:google-icon"  class="w-5 h-5" />
        <span>Sign in with Google</span>
      </button>
      <button
          class="flex items-center justify-center dark:bg-[#2F3349FF] dark:text-white w-full px-4 py-2 space-x-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="button"
      >
        <UIcon name="skill-icons:github-dark" class="w-5 h-5" />
        <span>Sign in with GitHub</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
