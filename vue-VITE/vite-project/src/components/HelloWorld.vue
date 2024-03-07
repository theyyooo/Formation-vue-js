<template>
  <div class="hello">
    {{ msg }}
  </div>
  <div>
    Hello
    <slot name="nom">Doe</slot>
    <slot name="prenom">John</slot> from {{ ville }}
  </div>
  <div>
    <input type="text" v-model="pays" ref="country">
    <button @click="envoyer">Envoyer au parent</button>
    <!-- <button @click="$emit('sendData', this.pays)">Envoyer au parent</button> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const pays = ref('')
const msg = ref('Hello world!')
const country = ref(null)

defineProps({
  ville: {
    type: String,
    default: 'Marseille'
  }
})
const emit = defineEmits(['sendData'])

const envoyer = () => {
  emit('sendData', pays.value)
}

onMounted(() => {
  country.value.focus()
  console.log('mounted');
})

defineExpose({
  msg
})
</script>

<!-- <script>
export default{
  name: "hello world",
  props:{
    ville : {
      default: "Marseille"
    }
  },

  data() {
    return {
      msg: "hello world",
      pays: '',
    }
  },

  methods:{
    envoyer(){
      this.$emit("sendData", this.pays);
    }
  },

  created(){
    console.log("composant crée");
  },
  mounted(){
    console.log("composant monté");
    this.$refs.country.focus()
  },

  emits:[
    'sendData'
  ]
}
</script> -->

<style scoped></style>
