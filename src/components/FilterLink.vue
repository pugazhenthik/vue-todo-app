<script setup>
const props = defineProps({ filter: Boolean });
console.log(props.filter);
</script>
<template>
  <a
    href="#"
    class="py-1 px-2 bg-blue-100 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
    :class="{ ' bg-blue-300 border-blue-400': props.filter }"
    ><slot></slot
  ></a>
</template>
