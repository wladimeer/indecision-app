<template>
  <!--  Typing Message -->
  <div v-if="isUserTyping" class="flex">
    <div class="bg-gray-200 text-black p-2 rounded-lg max-w-xs">
      <span>Escribiendo...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTyping } from '@/composables/useTyping'

const { isUserTyping } = useTyping()
</script>
