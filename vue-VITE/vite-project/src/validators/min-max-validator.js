import { defineRule } from "vee-validate";

defineRule('minMax', (value, [min, max]) => {
    if (value == undefined) {
        return 'Ce champ est obligatoire'
    }
    if (value < min) {
        return `La valeur doit être supérieure à ${min}`
    }
    if (value > max) {
        return `La valeur doit être inférieure à ${max}`
    }
    return true
})