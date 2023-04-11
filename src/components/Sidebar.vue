<script setup>
import NavLink from "./NavLink.vue";
import { useTaskStore } from "../store/TodoStore";
const taskStore = useTaskStore();
</script>

<template>
  <div class="w-1/4 bg-blue-100 p-4 m-4 rounded-md">
    <div class="flex">
      <div class="flex-grow-0 w-10 text-blue-600 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <h1 class="text-blue-600 mb-4 font-semibold text-xl">Pugazhenthi</h1>
    </div>
    <div class="my-4">
      <NavLink :taskCount="2">My Day</NavLink>
      <NavLink :taskCount="taskStore.getImportantTasksCount">Important</NavLink>
      <NavLink :taskCount="taskStore.getTasksCount">Tasks</NavLink>
    </div>
    <div class="my-4">
      <h2 class="text-blue-600 mb-4 font-semibold text-xl">Archived</h2>
      <div class="my-4">
        <NavLink :taskCount="taskStore.getArchivedTasksCount">Archived</NavLink>
      </div>
    </div>
  </div>
</template>
