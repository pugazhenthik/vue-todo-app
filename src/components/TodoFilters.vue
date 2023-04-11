<script setup>
import { useTaskStore } from "../store/TodoStore";

const taskStore = useTaskStore();
</script>
<template>
  <div class="mb-4 mt-1">
    <a
      href=""
      class="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
      >All ({{ taskStore.tasksCount }})</a
    >
    <a
      href=""
      class="py-1 px-2 bg-green-200 rounded-md border-2 border-green-300 text-sm text-gray-800 mr-2 hover:bg-green-300 hover:border-green-400"
      >Completed ({{ taskStore.completedTasksCount }})</a
    >

    <a
      href=""
      class="py-1 px-2 bg-green-200 rounded-md border-2 border-green-300 text-sm text-gray-800 mr-2 hover:bg-green-300 hover:border-green-400"
      >Important ({{ taskStore.importantTasksCount }})</a
    >
  </div>
</template>
