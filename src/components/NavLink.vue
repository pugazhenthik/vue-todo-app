<script setup>
const props = defineProps({ taskCount: Number });
</script>
<template>
  <a
    href=""
    class="flex justify-between items-center px-2 py-2 my-1 hover:bg-blue-200 border-0 border-l-4 v border-blue-100 hover:border-blue-500 rounded-full rounded-l-none text-gray-700 hover:text-gray-800"
  >
    <span><slot></slot></span>
    <span class="px-2 text-xs bg-blue-100 rounded-full">{{
      this.taskCount
    }}</span>
  </a>
</template>
