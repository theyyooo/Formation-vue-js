<template>
  <h1>Opération {{ operation }}</h1>
  <p v-if="operation">{{ query.a }} {{ operation }} {{ query.b }} = {{ resultat }}</p>
  <p v-else>Opérateur non reconnu</p>
</template>

<script>
export default {
  data() {
    return {
      map: {
        plus: "+",
        moins: "-",
        fois: "*",
        div: "/",
      },
    };
  },

  methods: {},

  computed: {
    operation() {
      return this.map[this.$route.params.operation];
    },
    query() {
      return this.$route.query;
    },
    resultat() {
      switch (this.operation) {
        case "+":
          return Number(this.query.a) + Number(this.query.b);
        case "-":
          return Number(this.query.a) - Number(this.query.b);
        case "*":
          return Number(this.query.a) * Number(this.query.b);
        case "/":
          return Number(this.query.a) / Number(this.query.b);
        default:
          break;
      }
    },
  },
};
</script>

<style></style>
