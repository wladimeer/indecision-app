<template>
  <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
    <span>{{ recipient }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  recipient: string
}

defineProps<Props>()
</script>
