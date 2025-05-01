const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
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
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Form submitted");
    },
  },
});

app.mount("#events");
