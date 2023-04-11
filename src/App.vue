<script setup>
import AddTask from "./components/AddTask.vue";
import Sidebar from "./components/Sidebar.vue";
import Todo from "./components/Todo.vue";
import TodoFilters from "./components/TodoFilters.vue";
</script>
<template>
  <div class="bg-slate-50">
    <div class="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <Sidebar></Sidebar>
      <div class="flex-grow relative p-4">
        <TodoFilters></TodoFilters>
        <Todo></Todo>
        <AddTask></AddTask>
      </div>
    </div>
  </div>
</template>
