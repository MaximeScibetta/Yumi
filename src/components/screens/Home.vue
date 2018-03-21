<template>
    <div class="home">
        <menu-slider @currentMenuDay="getCurrentDay"></menu-slider>
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
            currentDay: null,
        }
    }, 
    methods:{
        getCurrentDay(data){
            this.currentDay = data;
        }
    }
}
</script>
