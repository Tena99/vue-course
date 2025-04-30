const app = Vue.createApp({
  // The same as data: function() {}
  data() {
    //Always an object
    return {
      courseGoal: "Finish the course",
      vueLink: "https://vuejs.org/",
      htmlExample: "<h1>A very big title</h1>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal; // <--- is used when working with data
      } else {
        return "Master Vue";
      }
    },
  },
});

app.mount("#user-goal");
