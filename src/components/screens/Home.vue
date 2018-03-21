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
            currentMenuDay: null,
        }
    }, 
    methods:{
        getCurrentDay(data){
            this.currentMenuDay = data;
        }
    }
}
</script>
