<template>
    <div class="image">
        <div id="javascript-gallery" tabindex="0">

            <a @click.prevent="currentImage = images.dish" :href="images.dish">
                <img :src="images.dish" alt="">
            </a>
            <a @click.prevent="currentImage = images.entry" :href="images.entry">
                <img :src="images.entry" alt="">
            </a>
            <a @click.prevent="currentImage = images.dessert" :href="images.dessert">
                <img :src="images.dessert" alt="">
            </a>
            
        </div>
        <figure id="fullimagecontainer">
            <img :src="currentImage" alt="">
        </figure>
    </div>
</template>

<script>
export default {
    name: 'SildeShow',
    props: {
        images: {
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            currentImage: null,
        }
    },
    mounted(){
        this.currentImage = this.images.dish
    },
}
</script>

