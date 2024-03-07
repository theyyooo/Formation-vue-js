export default {
    data() {
        return {
            message: 'Hello world!',
            messageAvecBalise: '<p>Hello world!</p>',
            numbers: [2, 3, 8, 5],
            alien: { nom: 'Doe', prenom: 'John' },
            nom : "Wick",
            personnes: [
                { id: 100, nom: 'Wick', prenom: 'John' },
                { id: 101, nom: 'Abruzzi', prenom: 'John' },
                { id: 102, nom: 'Marley', prenom: 'Bob' },
                { id: 103, nom: 'Segal', prenom: 'Steven' }
            ],
            lien : "http://elmouelhia.free.fr/teaching.html",
            href : "http://elmouelhia.free.fr/teaching.html",
            hrefTarget : {
                href: "http://elmouelhia.free.fr/teaching.html",
                target: '_blank',
            },
            couleur : 'white',
            bgcolor : 'blue',
            font : {
                fontWeight: 'bold',
                fontStyle: 'italic',
            },
            btnDisplay: false,
            valueInput : '',
        }
    },
    methods: {
        afficherBonjour : function(){
            return `Bonjour ${this.nom}`;
        },

        afficherBonjour(nom) {
            return `Bonjour ${nom}`;
        },

        alertBonjour(){
            alert('bonjour');
        },

        btnClicked(){
            this.btnDisplay = !this.btnDisplay;
        },
    },

    watch: {
        valueInput(newValue,oldValue){
            console.log(oldValue, newValue);
        }
    },
    template : 
    `<h2>Interpolation</h2>
    {{ message }}
    <ul>
        <li>{{ numbers[0] }}</li>
        <li>{{ numbers['1'] }}</li>
        <li>{{ numbers["2"] }}</li>
    </ul>
    <p>{{ alien }}</p>
    <ul>
        <li>{{ alien.nom }}</li>
        <li>{{ alien['prenom'] }} </li>
    </ul>
    <p>{{ afficherBonjour() }}</p>
    <p>{{ afficherBonjour('Travolta') }}</p>
    <p> {{ numbers[0] % 2 == 0 ? 'pair' : 'impair' }}</p>
    <p> {{ nom.length }}</p>    
    <h2>Directive v-html</h2>
    {{ messageAvecBalise }}
    <div v-html="messageAvecBalise"></div>
    <h2>v-for</h2>
    <ul>
        <li v-for="elt in numbers">
            {{ elt }}
        </li>
    </ul>
    <ul>
        <li v-for="(elt, ind) in numbers">
            {{ ind }} - {{ elt }}
        </li>
    </ul>
    <ul>
        <li v-for="(value, key, index) in alien" :key="key">
            {{ index }} : {{ key }} : {{ value }}
        </li>
    </ul>
    <ul>
        <li v-for="{ id, nom, prenom} in personnes" :key="id">
            {{ prenom }} {{ nom }}
        </li>
    </ul>
    <ul>
        <li v-for=" personne  in personnes" :key="personne.id">
           <template v-for="key in personne" :key="key">
            {{key}}
           </template>
        </li>
    </ul>
    <h2>Interpolation = v-text</h2>
    <div v-text="messageAvecBalise">

    </div>
    <ul>
        <li v-for="el in numbers">
            <template v-if="el %2 == 0"> {{el}} est paire</template>
            <template v-else> {{el}} est impaire</template>
        </li>
    </ul>
    <p><a :href>clique ici</a></p>
    <p><a v-bind="hrefTarget">clique ici (new page)</a></p>
    <h2>classe : </h2>
    <p :class="{rouge: nom == 'Wick'}"> {{nom}}</p>
    <ul>
        <li v-for="el in numbers">
            <p :class="el %2 == 0 ? 'rouge' : 'bleu'"> {{el}}</p>
        </li>
    </ul>
    <h2>style : </h2>
    <p :style="{color: couleur, background: bgcolor}">Test de syle</p>
    <p :style="[font]">Test de syle</p>
    <h2>v-on event binding</h2>
    <button @click="alertBonjour">click ici</button>
    <div>
        <button :disabled="btnDisplay" @click="btnClicked">
            btn1
        </button>
        <button :disabled="!btnDisplay" @click="btnClicked">
            btn2
        </button>
    </div>
    <div>
        <label for="texte">input : </label>
        <input type="text" id="texte" v-model="valueInput">{{valueInput}}</input>
    </div>`
}