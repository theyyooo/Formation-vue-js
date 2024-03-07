<template>
  <li>
    <input type="text" v-model="ville" />
    <input type="text" v-model="cp" />
  </li>
</template>

<!-- <template>
  <li>
    <input type="text" :value="ville" @input="$emit('update:ville', $event.target.value)" />
    <input type="text" :value="cp" @input="$emit('update:cp', $event.target.value)" />
  </li>
</template> -->

<script setup>
const ville = defineModel('ville')
const cp = defineModel('cp')
</script>

<!-- <script>
export default {
  data() {
    return {};
  },

  props: {
    ville: String,
    cp: String
  },

  emits: ["update:ville", "update:cp"],
};
</script> -->

<style></style>
