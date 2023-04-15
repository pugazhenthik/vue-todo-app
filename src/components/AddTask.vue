<script setup>
import { ref } from "vue";
import { useTaskStore } from "../store/TodoStore";
import Important from "./icons/Important.vue";

const task = ref("");
const isImportant = ref(false);
const showError = ref(false);

const taskStore = useTaskStore();
const handleImportant = () => {
  isImportant.value = !isImportant.value;
};
const handleSubmit = () => {
  showError.value = true;
  if (task.value.length > 0) {
    showError.value = false;
    taskStore.addTask({
      id: taskStore.getTasksCount + 1,
      todo: task.value,
      isCompleted: false,
      isImportant: isImportant.value,
      isArchived: false,
      tags: ["shopping"],
    });

    isImportant.value = false;
    task.value = "";
  }
};
</script>
<template>
  <div class="absolute bottom-4 w-full right-0">
    <div
      class="bg-blue-100 border-2 border-blue-100 rounded-md shadow-blue-200 shadow-lg p-4 mx-4"
    >
      <form @submit.prevent="handleSubmit">
        <div class="flex">
          <div class="flex-grow">
            <input
              type="text"
              class="block w-full px-4 py-1 border-1 border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-200"
              v-model="task"
              placeholder="Type here to schedule something.."
            />
            <p v-if="showError" class="text-sm text-red-600 pt-1">
              Type something..
            </p>
          </div>
          <div>
            <button
              type="button"
              class="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
              @click.prevent="handleImportant"
            >
              <Important :isImportant="isImportant"></Important>
            </button>
          </div>
          <div>
            <button
              type="submit"
              class="ml-4 bg-blue-200 px-4 py-1 border-2 border-blue-300 text-blue-800 rounded-md hover:border-blue-400 hover:shadow-md hover:bg-blue-300"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
