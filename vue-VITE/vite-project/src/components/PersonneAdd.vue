<template>
    <div>Ajouter une personne</div>
    <Form @submit="ajouter" :initial-values="personne"  @invalid-submit="showError">
        <div>
            <label for="nom">Nom</label>
            <Field type="text" id="nom" name="nom" :rules="validateString"></Field> 
            <ErrorMessage name="nom" as="div"></ErrorMessage>
        </div>
        <div>
            <label for="prenom">Prenom</label>
            <Field type="text" id="prenom" name="prenom" :rules="validateString"/> 
            <ErrorMessage name="prenom" as="div"></ErrorMessage>
        </div>
        <div>
            <label for="age">Age</label>
            <Field type="number" id="age" name="age" :rules="'minMax:0,150'"></Field> 
            <ErrorMessage name="age" as="div"></ErrorMessage>
        </div>
        <button>Ajouter</button>
    </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import axios from 'axios';

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            personne: {
                nom: "Doe",
                prenom: 'John',
                age: 45
            }
        };
    },

    methods: {
        ajouter(values, actions) {
          /*   console.log(values);
            actions.resetForm(); */
            axios
            .post(`${this.BASE_URL}/personnes`, values)
            .then(res => this.$emit('sendData', res.data))
        },

        validateString(value){
            if(value == undefined || value ==''){
                return 'Champ obligatoire'
            }
            if(value[0] < 'A' || value[0] > 'Z'){
                return 'Vous devez mettre la première lettre en majuscule'
            }
            return true;
        },

        showError({values, errors}){
            console.log(errors);
        }

        /* validateAge(value){
            if(!value){
                return 'Champ obligatoire'
            }
            if(value < 0 || value > 150){
                return 'Vous devez mettre un age cohérent'
            }
            return true;
        } */
    },

    emits:['sendData']
};
</script>

<style></style>
