<script setup>
import ToDo from "./components/ToDo.vue";
</script>
<template>
  <main>
    <div class="bg-slate-50">
      <div class="flex max-w-5xl bg-blue-50 p-4 h-screen mx-auto">
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
            <h1 class="text-blue-600 mb-4 font-semibold text-xl">
              Pugazhenthi
            </h1>
          </div>
          <div class="my-4">
            <a
              href=""
              class="flex justify-between items-center px-2 py-2 my-1 bg-blue-200 border-0 border-l-4 border-blue-500 rounded-full rounded-l-none text-gray-700 hover:text-gray-800"
            >
              <span>My Day</span>
              <span class="px-2 text-xs bg-blue-100 rounded-full">6</span>
            </a>
            <a
              href=""
              class="flex justify-between items-center px-2 py-2 my-1 bg-blue-100 border-0 border-l-4 border-blue-100 hover:border-blue-500 rounded-full rounded-l-none text-gray-600 hover:text-gray-800 hover:bg-blue-200"
            >
              <span>Important</span>
              <span class="px-2 text-xs bg-blue-100 rounded-full">2</span></a
            >
            <a
              href=""
              class="flex justify-between items-center px-2 py-2 my-1 bg-blue-100 border-0 border-l-4 border-blue-100 hover:border-blue-500 rounded-full rounded-l-none text-gray-600 hover:text-gray-800 hover:bg-blue-200"
            >
              <span>Tasks</span>
              <span class="px-2 text-xs bg-blue-100 rounded-full">8</span></a
            >
          </div>
          <div class="my-4">
            <h2 class="text-blue-600 mb-4 font-semibold text-xl">Lists</h2>
            <div class="my-4">
              <a
                href=""
                class="px-2 py-2 my-1 hover:bg-blue-200 border-0 border-l-4 hover:border-blue-500 block rounded-full rounded-l-none text-gray-700 hover:text-gray-800"
                >Shopping</a
              >
              <a
                href=""
                class="px-2 py-2 my-1 bg-blue-100 border-0 border-l-4 border-blue-100 hover:border-blue-500 block rounded-full rounded-l-none text-gray-600 hover:text-gray-800 hover:bg-blue-200"
                >Finance</a
              >
              <a
                href=""
                class="px-2 py-2 my-1 bg-blue-100 border-0 border-l-4 border-blue-100 hover:border-blue-500 block rounded-full rounded-l-none text-gray-600 hover:text-gray-800 hover:bg-blue-200"
                >Personal</a
              >
              <a
                href="#"
                class="p-2 text-gray-600 mt-4 block hover:bg-blue-200 rounded-md hover:shadow-lg hover:shadow-blue-100"
                >+ Add new list</a
              >
            </div>
          </div>
        </div>
        <div class="flex-grow relative p-4">
          <div class="mb-4 mt-1">
            <a
              href=""
              class="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
              >All (6)</a
            >
            <a
              href=""
              class="py-1 px-2 bg-blue-200 rounded-md border-2 border-blue-300 text-sm text-gray-800 mr-2 hover:bg-blue-300 hover:border-blue-400"
              >Freelancer (4)</a
            >
            <a
              href=""
              class="py-1 px-2 bg-red-200 rounded-md border-2 border-red-300 text-sm text-gray-800 mr-2 hover:bg-red-300 hover:border-red-400"
              >My Project (2)</a
            >
          </div>
          <div class="my-4 h-4/5 overflow-scroll">
            <ToDo></ToDo>
          </div>
          <div class="absolute bottom-4 w-full right-0">
            <div
              class="bg-blue-100 border-2 border-blue-100 rounded-md shadow-blue-200 shadow-lg p-4 mx-4"
            >
              <form>
                <div class="flex">
                  <input
                    type="text"
                    class="flex-grow px-4 py-1 border-1 border-blue-300 rounded-md focus:outline-none focus:ring focus:border-blue-200"
                  />
                  <button
                    type="submit"
                    class="ml-4 bg-blue-200 px-4 py-1 border-2 border-blue-300 text-blue-800 rounded-md hover:border-blue-400 hover:shadow-md hover:bg-blue-300"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
