<script setup lang="ts">
import { useAuthStore } from '~/store/useAuthStore';
const { userData, logUserOut, authenticated } = useAuthStore()
const router = useRouter();

const logout = () => {
  logUserOut()  
  router.push('/auth/login/')
}

const items = [
  [{
    label: userData.email,
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Documentation',
    icon: 'i-heroicons-book-open'
  }, {
    label: 'Changelog',
    icon: 'i-heroicons-megaphone'
  }, {
    label: 'Status',
    icon: 'i-heroicons-signal'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: (e) => logout()
  }]
]

</script>

<template>
  <UDropdown :items="items"   >
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

      <template #account="{ item }" >
        <div class="text-left ">
          <p>
            Signed in as
          </p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }" >
        <span class="truncate">{{ item.label }}</span>
        
        <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
      </template>
  </UDropdown>
</template>

<style>

</style>

