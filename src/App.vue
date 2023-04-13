<script setup>
import { ref } from "vue";
import AddTask from "./components/AddTask.vue";
import Sidebar from "./components/Sidebar.vue";
import Todo from "./components/Todo.vue";
import TodoFilters from "./components/TodoFilters.vue";
import { useTaskStore } from "./store/TodoStore";
const filterTag = ref("scheduled");
const filterTodo = (filter) => {
  filterTag.value = filter;
};

const taskStore = useTaskStore();

const toggle = (id, event) => {
  taskStore[event](id);
};
</script>
<template>
  <div class="bg-slate-50">
    <div class="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
      <div class="flex-grow relative p-4">
        <TodoFilters
          @filterTodo="filterTodo"
          :filterTag="filterTag"
        ></TodoFilters>
        <Todo
          v-if="filterTag == 'completed'"
          :tasks="taskStore.getCompletedTasks"
          @toggle="toggle"
        ></Todo>
        <Todo
          v-else-if="filterTag == 'scheduled'"
          :tasks="taskStore.getScheduledTasks"
          @toggle="toggle"
        ></Todo>
        <Todo
          v-else="filterTag == 'important'"
          :tasks="taskStore.getImportantTasks"
          @toggle="toggle"
        ></Todo>
        <AddTask></AddTask>
      </div>
    </div>
  </div>
</template>
