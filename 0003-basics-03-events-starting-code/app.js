const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(num) {
      if (this.counter < 10) {
        this.counter = this.counter + num;
      }
    },
    decrement(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
  },
});

app.mount("#events");
