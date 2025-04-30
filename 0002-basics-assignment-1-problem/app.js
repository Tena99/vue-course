const app = Vue.createApp({
  data() {
    return {
      userInfo: { name: "Ann", age: 25 },
      catImg:
        "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.userInfo.age + 5;
    },
    chooseRandomNum() {
      return Math.random().toFixed(2);
    },
  },
});

app.mount("#assignment");
