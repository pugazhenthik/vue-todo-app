<script setup>
import { useTaskStore } from "../store/TodoStore";
import FilterLink from "./FilterLink.vue";

const taskStore = useTaskStore();
</script>
<template>
  <div class="mb-4 mt-1">
    <FilterLink @click.prevent="$emit('filterTodo', 'scheduled')"
      >Scheduled ({{ taskStore.getScheduledTasksCount }})</FilterLink
    >
    <FilterLink @click.prevent="$emit('filterTodo', 'completed')"
      >Completed ({{ taskStore.getCompletedTasksCount }})</FilterLink
    >
    <FilterLink @click.prevent="$emit('filterTodo', 'important')"
      >Important ({{ taskStore.getImportantTasksCount }})</FilterLink
    >
  </div>
</template>
