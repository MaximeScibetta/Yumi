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
            currentMenuDay: this.getCurrentDay()
        }
    }, 
    methods:{
        getCurrentDay(data){
            if(!data){
                var event = new Date('April 02, 2018');
                var options = {year: 'numeric', month: 'numeric', day: 'numeric' };

                var formatDate = event.toLocaleDateString('fr-FR', options).replace(/\//g,'');
                
                // expected output: 21032018
                return formatDate
            }
            this.currentMenuDay = data;
        }
    }
}
</script>
