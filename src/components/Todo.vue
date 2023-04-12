<script setup>
import Archive from "./icons/Archive.vue";
import Checked from "./icons/Checked.vue";
import Important from "./icons/Important.vue";

const props = defineProps({ tasks: Object });
defineEmits(["toggle"]);
</script>
<template>
  <div class="my-4 h-4/5 overflow-scroll">
    <div v-for="task in props.tasks" :key="task.id">
      <div
        class="p-4 my-4 rounded-md bg-white hover:shadow-blue-100 hover:shadow-lg"
        :class="{ 'bg-green-50': task.isCompleted }"
      >
        <div class="flex items-start">
          <div class="pt-1">
            <button
              @click="$emit('toggle', task.id, 'toggleCompleted')"
              v-if="!task.isCompleted"
              class="flex"
            >
              <span
                class="border-2 border-slate-300 w-5 h-5 rounded-full block hover:border-slate-400 hover:border-2 hover:shadow-md"
              >
                &nbsp;
              </span>
            </button>
            <button
              @click="$emit('toggle', task.id, 'toggleCompleted')"
              v-if="task.isCompleted"
              class="flex"
            >
              <Checked></Checked>
            </button>
          </div>
          <div class="pl-4 flex-grow pb-1">
            {{ task.todo }}
          </div>
          <button
            class="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            @click="$emit('toggle', task.id, 'toggleImportant')"
          >
            <Important :isImportant="task.isImportant"></Important>
          </button>
          <button
            class="ml-2 h-8 hover:bg-slate-200 p-1 rounded-md"
            @click="$emit('toggle', task.id, 'toggleArchived')"
          >
            <Archive></Archive>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
