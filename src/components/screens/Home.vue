<template>
    <div class="home">
        <menu-slider @currentMenuDay="getCurrentDay" :currentMenuDay="currentMenuDay"></menu-slider>
    </div>
</template>


<script>
import MenuSlider from '../ui/MenuSlider'


export default {
    name: 'Home',
    components: {
        MenuSlider,
    },
    data(){
        return{
            currentMenuDay: '',
        }
    }, 
    methods:{
        getCurrentDay(){
            var date = new Date();
            var options = {year: 'numeric', month: 'numeric', day: 'numeric' };

            var formatDate = date.toLocaleDateString('fr-FR', options).replace(/\//g,'');
            
            // expected output: 21032018
            this.currentMenuDay = formatDate
        }
    },
    mounted(){
        this.getCurrentDay()
    }
}
</script>
