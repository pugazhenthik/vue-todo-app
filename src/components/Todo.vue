<script setup>
import { useTaskStore } from "../store/TodoStore";
import Archive from "./icons/Archive.vue";
import Important from "./icons/Important.vue";

const taskStore = useTaskStore();
</script>
<template>
  <div class="my-4 h-4/5 overflow-scroll">
    <div v-for="task in taskStore.getScheduledTasks" :key="task.id">
      <div
        class="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg"
        :class="{ 'bg-green-50': task.isCompleted }"
      >
        <div class="flex">
          <div class="items-start">
            <input
              type="checkbox"
              @change="taskStore.toggleCompleted(task.id)"
              v-if="!task.isCompleted"
            />
          </div>
          <div class="pl-4 flex-grow">
            {{ task.todo }}
          </div>

          <button
            class="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            @click="taskStore.toggleImportant(task.id)"
          >
            <Important :fill="task.isImportant"></Important>
          </button>
          <button
            class="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            @click="taskStore.toggleArchived(task.id)"
          >
            <Archive></Archive>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
