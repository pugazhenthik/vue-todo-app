<script setup>
import { useTaskStore } from "../store/TodoStore";
import FilterLink from "./FilterLink.vue";

const taskStore = useTaskStore();
const props = defineProps({ filterTag: String });
defineEmits(["filterTodo"]);
</script>
<template>
  <div class="mb-4 mt-1">
    <FilterLink
      @click.prevent="$emit('filterTodo', 'scheduled')"
      :filter="filterTag == 'scheduled'"
      >Scheduled ({{ taskStore.getScheduledTasksCount }})</FilterLink
    >
    <FilterLink
      @click.prevent="$emit('filterTodo', 'completed')"
      :filter="filterTag == 'completed'"
      >Completed ({{ taskStore.getCompletedTasksCount }})</FilterLink
    >
    <FilterLink
      @click.prevent="$emit('filterTodo', 'important')"
      :filter="filterTag == 'important'"
      >Important ({{ taskStore.getImportantTasksCount }})</FilterLink
    >
    <FilterLink
      @click.prevent="$emit('filterTodo', 'archived')"
      :filter="filterTag == 'archived'"
      >Archived ({{ taskStore.getArchivedTasksCount }})</FilterLink
    >
  </div>
</template>
