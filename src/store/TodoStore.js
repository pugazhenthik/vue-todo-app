import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        todo: "Do something nice for someone I care about",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 26,
      },
      {
        id: 2,
        todo: "Contribute code or a monetary donation to an open-source software project Memorize the fifty states and their capitals",
        isCompleted: false,
        isImportant: true,
        isArchived: false,
        userId: 48,
      },
      {
        id: 3,
        todo: "Watch a classic movie",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 4,
      },
      {
        id: 4,
        todo: "Contribute code or a monetary donation to an open-source software project ",
        isCompleted: true,
        isImportant: true,
        isArchived: false,
        userId: 48,
      },
      {
        id: 5,
        todo: "Solve a Rubik's cube",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 31,
      },
      {
        id: 6,
        todo: "Bake pastries for me and neighbor",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 39,
      },
      {
        id: 7,
        todo: "Go see a Broadway production",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 32,
      },
      {
        id: 8,
        todo: "Write a thank you letter to an influential person in my life",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 13,
      },
      {
        id: 9,
        todo: "Invite some friends over for a game night",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 47,
      },
      {
        id: 10,
        todo: "Have a football scrimmage with some friends",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 19,
      },
      {
        id: 11,
        todo: "Text a friend I haven't talked to in a long time",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 39,
      },
      {
        id: 12,
        todo: "Organize pantry",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 39,
      },
      {
        id: 13,
        todo: "Buy a new house decoration",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 16,
      },
      {
        id: 14,
        todo: "Plan a vacation I've always wanted to take",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 28,
      },
      {
        id: 15,
        todo: "Clean out car",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 33,
      },
      {
        id: 16,
        todo: "Draw and color a Mandala",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 24,
      },
      {
        id: 17,
        todo: "Create a cookbook with favorite recipes",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 1,
      },
      {
        id: 18,
        todo: "Bake a pie with some friends",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 1,
      },
      {
        id: 19,
        todo: "Create a compost pile",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 5,
      },
      {
        id: 20,
        todo: "Take a hike at a local park",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 43,
      },
      {
        id: 21,
        todo: "Take a class at local community center that interests you",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 22,
      },
      {
        id: 22,
        todo: "Research a topic interested in",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 4,
      },
      {
        id: 23,
        todo: "Plan a trip to another country",
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        userId: 37,
      },
      {
        id: 24,
        todo: "Improve touch typing",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 45,
      },
      {
        id: 25,
        todo: "Learn Express.js",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 49,
      },
      {
        id: 26,
        todo: "Learn calligraphy",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 50,
      },
      {
        id: 27,
        todo: "Have a photo session with some friends",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 14,
      },
      {
        id: 28,
        todo: "Go to the gym",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 15,
      },
      {
        id: 29,
        todo: "Make own LEGO creation",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 30,
      },
      {
        id: 30,
        todo: "Take cat on a walk",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        userId: 15,
      },
    ],
  }),
  getters: {
    getTasks() {
      return this.tasks;
    },
    getTasksCount() {
      return this.getTasks.length;
    },
    getScheduledTasks() {
      return this.tasks.filter((task) => !task.isArchived && !task.isCompleted);
    },
    getScheduledTasksCount() {
      return this.getScheduledTasks.length;
    },
    getCompletedTasks() {
      return this.tasks.filter((task) => !task.isArchived && task.isCompleted);
    },
    getCompletedTasksCount() {
      return this.getCompletedTasks.length;
    },
    getImportantTasks() {
      return this.getTasks.filter(
        (task) => !task.isArchived && task.isImportant
      );
    },
    getImportantTasksCount() {
      return this.getImportantTasks.length;
    },
    getArchivedTasks() {
      return this.tasks.filter((task) => task.isArchived);
    },
    getArchivedTasksCount() {
      return this.getArchivedTasks.length;
    },
  },
  actions: {
    toggleCompleted(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isCompleted = !task.isCompleted;
    },
    toggleImportant(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isImportant = !task.isImportant;
    },
    toggleArchived(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isArchived = !task.isArchived;
    },
  },
});
