<template>
    <div class="home">
        <menu-slider></menu-slider>
    </div>
</template>


<script>
import MenuSlider from '../ui/MenuSlider'


export default {
    name: 'Home',
    components: {
        MenuSlider,
    },
    created(){
        var today = new Date();
        console.log('LUN' , today.getDate());
        console.log('MAR' , today.getDate() + 1);
        console.log('MER' , today.getDate() + 2);
        console.log('JEU' , today.getDate() + 3);
        console.log('VEN' , today.getDate() + 4);
    }
}
</script>
