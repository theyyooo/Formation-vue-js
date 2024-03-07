<template>
    <div>Ajouter une personne</div>
    <Form @submit="ajouter" :validation-schema="schema" ref="personneForm" v-slot="{meta, values, errors}">
        <div>
            <label for="nom">Nom</label>
            <Field type="text" id="nom" name="nom"></Field>
            <ErrorMessage name="nom" as="div"></ErrorMessage>
        </div>
        <div>
            <label for="prenom">Prenom</label>
            <Field type="text" id="prenom" name="prenom" />
            <ErrorMessage name="prenom" as="div"></ErrorMessage>
        </div>
        <div>
            <label for="age">Age</label>
            <Field type="number" id="age" name="age"></Field>
            <ErrorMessage name="age" as="div"></ErrorMessage>
        </div>
        <h2>Votre adresse</h2>
        <div>
            <label for="rue">Rue</label>
            <Field type="texte" id="rue" name="adresse.rue"></Field>
            <ErrorMessage name="rue" as="div"></ErrorMessage>
        </div>
        <div>
            <label for="cp">cp</label>
            <Field type="texte" id="cp" name="adresse.cp"></Field>
            <ErrorMessage name="cp" as="div"></ErrorMessage>
        </div>
        <button :disabled="!meta.valid">Ajouter</button>
    </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const validateString = (champ) => yup
                    .string()
                    .required()
                    .matches(/^[A-Z].{2,}/, `${champ} doit commencer par une majuscule`)
        return {
            schema: yup.object({
                nom: validateString('nom'),
                prenom: validateString('prenom'),
                age: yup.number().required().min(0, (args) => `valeur minimum autorisé: ${args.min}`).max(150),
            })
        };
    },

    methods: {
        ajouter(values, actions) {
            /*   console.log(values);
              actions.resetForm(); */
              this.$refs.personneForm.resetForm()
        },
    }
};
</script>

<style></style>
