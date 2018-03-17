<template>
    <div class="home">
        <postal-input></postal-input>
        <menu-slider></menu-slider>
    </div>
</template>


<script>
import PostalInput from '../ui/PostalInput'
import MenuSlider from '../ui/MenuSlider'

export default {
    name: 'Home',
    components: {
        PostalInput,
        MenuSlider
    }
}
</script>
