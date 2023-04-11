<script setup>
const props = defineProps({ count: Number });
</script>
<template>
  <a
    href=""
    class="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
    ><slot></slot
  ></a>
</template>
