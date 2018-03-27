<template>
    <div class="complete">
        <h1><span>Compléter votre repas</span></h1>
        <div class="complete__menu">
            <div class="complete__menu--item" v-for="drink in drinks" :key="drink.id">
                <img :src="drink.image" width="300" height="200" alt="">
                <div class="info">
                    <button class="add" @click="emitValue(true); addDrinkToMenu([drink, currentMenuDay])">+</button>
                    <div class="info__data">
                        <p>{{drink.name}} {{drink.format}}</p>
                        <p>{{drink.price}}€</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'CompleteMenu',
    props:{
        currentMenuDay: {
            type: String,
            required: true,
        }
    },
    methods: {
        ...mapMutations([
            'addDrinkToMenu'
        ]),
        emitValue(data){
            this.$emit('openRecap', data)
        }
    },
    computed: {
        ...mapGetters([
            'drinks'
        ])
    }

}
</script>

