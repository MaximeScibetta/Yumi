<template>
  <div id="app">
    <top-nav></top-nav>
    <swiper :options="swiperOptions" v-if="$route.name != 'Kart'">
        <swiper-slide style="background-image: url('https://scontent.fbru1-1.fna.fbcdn.net/v/t34.0-12/29019396_10213809633987226_1672873170_n.png?oh=c74508f4b49e4303b3e8478c53654258&oe=5AB37029');">
        </swiper-slide>
        <swiper-slide style="background-image: url('https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-0.3.5&s=06a5f840ce65add98e535354489598b9&auto=format&fit=crop&w=1350&q=80');">
        </swiper-slide>
        <swiper-slide style="background-image: url('https://images.unsplash.com/photo-1507010228826-fd02d8c83ddf?ixlib=rb-0.3.5&s=f2300fd0e920a202a946f248f487a482&auto=format&fit=crop&w=1341&q=80');">
        </swiper-slide>
        <swiper-slide style="background-image: url('https://images.unsplash.com/photo-1513663580958-665b7ef55d1b?ixlib=rb-0.3.5&s=a9b2518212c6d756fd90eaf3755cadc2&auto=format&fit=crop&w=1350&q=80');">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <postal-input v-if="$route.name == 'Home'"></postal-input>
    <div class="horse">
        <value v-if="$route.name != 'Kart'"></value>
        <postal-input v-if="$route.name == 'Home'"></postal-input>
    </div>
    
    <router-view/>
    
    <footer-item></footer-item>
  </div>
</template>

<script>
require('vue2-animate/dist/vue2-animate.min.css');

import TopNav from './components/ui/TopNav'
import PostalInput from './components/ui/PostalInput'
import Value from './components/ui/Value'
import FooterItem from './components/ui/Footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'App',
  components: {
    Value,
    PostalInput,
    TopNav,
    FooterItem,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
          spaceBetween: 30,
          loop: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/css/main.css';
</style>
