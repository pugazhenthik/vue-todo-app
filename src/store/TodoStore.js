import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        todo: 'Do something nice for someone I care about',
        isCompleted: true,
        isImportant: false,
        isArchived: false,
        tags: ['shopping'],
      },
      {
        id: 2,
        todo: 'Contribute code or a monetary donation to an open-source software project Memorize the fifty states and their capitals',
        isCompleted: false,
        isImportant: true,
        isArchived: false,
        tags: ['shopping'],
      },
      {
        id: 3,
        todo: 'Watch a classic movie',
        isCompleted: false,
        isImportant: false,
        isArchived: false,
        tags: ['finance'],
      },
      {
        id: 4,
        todo: 'Contribute code or a monetary donation to an open-source software project ',
        isCompleted: true,
        isImportant: true,
        isArchived: true,
      },
      {
        id: 5,
        todo: "Solve a Rubik's cube",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 6,
        todo: 'Bake pastries for me and neighbor',
        isCompleted: false,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 7,
        todo: 'Go see a Broadway production',
        isCompleted: false,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 8,
        todo: 'Write a thank you letter to an influential person in my life',
        isCompleted: true,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 9,
        todo: 'Invite some friends over for a game night',
        isCompleted: false,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 10,
        todo: 'Have a football scrimmage with some friends',
        isCompleted: false,
        isImportant: false,
        isArchived: false,
      },
      {
        id: 11,
        todo: "Text a friend I haven't talked to in a long time",
        isCompleted: false,
        isImportant: false,
        isArchived: false,
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
      return this.tasks.filter((task) => !task.isArchived && task.isImportant);
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
    addTask(task) {
      this.tasks.push(task);
    },
  },
});
