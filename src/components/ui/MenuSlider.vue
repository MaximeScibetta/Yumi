<template>
    <div class="menuContent">
        <div class="center">
            <p class="write">Faites votre choix</p>
            <div class="can-toggle demo-rebrand-1">
                <input id="d" type="checkbox" v-model="veggieMode">
                <label for="d">
                    <div class="can-toggle__switch" data-checked="Veggie" data-unchecked="Classic"></div>
                </label>
            </div>
        </div>
        <md-tabs key="1" v-show="veggieMode" md-active-tab="tab-day1" md-dynamic-height class="days">
            <md-tab id="tab-day1" md-label="LUN 2">
                <h1>Faux filet veggie et sa sauce au vin rouge</h1>
                <div class="image">
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop1">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs1">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                    </swiper>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button @click="showKart = true" v-scroll-to="'#drinks'" class="addKart">
                            + Ajouter au panier
                        </button>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet veggie et sa sauce au vin rouge</li>
                                <li>Dessert</li>
                                <li>Crème au chocolat</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingredient">
                            <ul>
                                <li>Entrée</li>
                                <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                                <li>Plat</li>
                                <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                                <li>Dessert</li>
                                <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
            <md-tab id="tab-day2" md-label="MAR 3">
                <h1>Faux filet veggie et sa sauce au vin rouge</h1>
                <div class="image">
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop2">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs2">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                    </swiper>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button class="addKart">
                            + Ajouter au panier
                        </button>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet veggie et sa sauce au vin rouge</li>
                                <li>Dessert</li>
                                <li>Crème au chocolat</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingredient">
                            <ul>
                                <li>Entrée</li>
                                <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                                <li>Plat</li>
                                <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                                <li>Dessert</li>
                                <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
            <md-tab id="tab-day3" md-label="MER 4">
                <h1>Faux filet veggie et sa sauce au vin rouge</h1>
                <div class="image">
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop3">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs3">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                    </swiper>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button class="addKart">
                            + Ajouter au panier
                        </button>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet veggie et sa sauce au vin rouge</li>
                                <li>Dessert</li>
                                <li>Crème au chocolat</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingredient">
                            <ul>
                                <li>Entrée</li>
                                <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                                <li>Plat</li>
                                <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                                <li>Dessert</li>
                                <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
            <md-tab id="tab-day4" md-label="JEU 5">
                <h1>Faux filet veggie et sa sauce au vin rouge</h1>
                <div class="image">
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop4">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs4">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                    </swiper>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button class="addKart">
                            + Ajouter au panier
                        </button>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet veggie et sa sauce au vin rouge</li>
                                <li>Dessert</li>
                                <li>Crème au chocolat</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingredient">
                            <ul>
                                <li>Entrée</li>
                                <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                                <li>Plat</li>
                                <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                                <li>Dessert</li>
                                <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
            <md-tab id="tab-day5" md-label="VEN 6">
                <h1>Faux filet veggie et sa sauce au vin rouge</h1>
                <div class="image">
                    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop5">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs5">
                        <swiper-slide class="slide-1"></swiper-slide>
                        <swiper-slide class="slide-2"></swiper-slide>
                        <swiper-slide class="slide-3"></swiper-slide>
                    </swiper>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button class="addKart">
                            + Ajouter au panier
                        </button>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet veggie et sa sauce au vin rouge</li>
                                <li>Dessert</li>
                                <li>Crème au chocolat</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingredient">
                            <ul>
                                <li>Entrée</li>
                                <li>oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta</li>
                                <li>Plat</li>
                                <li>faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre</li>
                                <li>Dessert</li>
                                <li>chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
        </md-tabs>
        <md-tabs key="2"  v-show="!veggieMode" md-dynamic-height class="days" v-on:md-changed="emitValue">
<template v-for="day in weekDay">
            <md-tab v-for="menu in weekClassicMenu" v-if="menu.shortDate === day" :key="menu.id"
            :id="menu.idDate" 
            :md-label="menu.shortDate">
                <p class="dateMenu">{{menu.longDate}}</p>
                <h1>{{menu.name}}</h1>
                <div class="image">
                    <slider animation="fade">
                        <slider-item>
                            <div :style="'background: url('+menu.images.entry+'); height: 100%; width: 100%; background-size: cover; background-position: center;'">
                            </div>
                        </slider-item>
                        <slider-item>
                            <div :style="'background: url('+menu.images.dish+'); height: 100%; width: 100%; background-size: cover; background-position: center;'">
                            </div>
                        </slider-item>
                        <slider-item>
                            <div :style="'background: url('+menu.images.dessert+'); height: 100%; width: 100%; background-size: cover; background-position: center;'">
                            </div>
                        </slider-item>
                    </slider>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">{{menu.price}}€</span>
                
                        <button v-if="myShopKart[menu.idDate]" @click="removeMenu(menu.idDate); showKart = true; remove15toPrice()" class="addKart">
                            Supprimer du panier
                        </button>

                        <button v-else @click="addMenu([menu, menu.idDate]); showKart = true; add15toPrice()" v-scroll-to="'#drinks'" class="addKart">
                            + Ajouter au panier
                        </button>
                               
                        <div class="payData" @click="payData = true"><md-icon>info_outline</md-icon><span>Moyens de paiement acceptés</span></div>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="menu">
                            <ul>
                                <li>Entrée</li>
                                <li>{{menu.dish.entry}}</li>
                                <li>Plat</li>
                                <li>{{menu.dish.dish}}</li>
                                <li>Dessert</li>
                                <li>{{menu.dish.dessert}}</li>
                            </ul>
                        </md-tab>
                        <md-tab id="ingredient" md-label="ingrédients">
                            <ul>
                                <li>Entrée</li>
                                <li>{{menu.ingredient.entry}}</li>
                                <li>Plat</li>
                                <li>{{menu.ingredient.dish}}</li>
                                <li>Dessert</li>
                                <li>{{menu.ingredient.dessert}}</li>
                            </ul>
                        </md-tab>
                    </md-tabs>
                </div>
            </md-tab>
</template>
        </md-tabs>
        <complete-menu id="drinks" :currentMenuDay="currentMenuDay"></complete-menu>
        <md-dialog class="recapKart" :md-active.sync="showKart">
            <md-dialog-title>Récapitulatif</md-dialog-title>
            <md-dialog-content>
                <div class="description">
                    <ul class="description__content">
                        <template v-for="item in myShopKart">
                            <li><p>{{item.name}}</p></li>
                            <template v-if="item.drinks.length != 0" v-for="drink in item.drinks">
                                <li>
                                    <p>{{drink.name}}</p>
                                </li>
                            </template>
                        </template>
                    </ul>
                    <div class="description__price">
                        <dl>
                            <dt>Articles :</dt>
                            <dd>{{priceKart}} €</dd>
                            <dt>Livraison :</dt>
                            <dd>1,50 €</dd>
                            <dt>T.V.A. :</dt>
                            <dd>12,00 %</dd>
                            <dt class="end">Montant :</dt>
                            <dd class="end">34,50 €</dd>
                        </dl>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions>                
                <md-button class="x" @click="showKart = false"><md-icon>close</md-icon></md-button>
                <md-button class="buy" @click="showKart = false; $router.push({ name: 'Kart'})">Passer la commande</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog class="payData" id="payData" :md-active.sync="payData">
            <md-dialog-actions>                
                <md-button class="x" @click="payData = false"><md-icon>close</md-icon></md-button>
            </md-dialog-actions>
            <md-dialog-title>Moyens de paiement acceptés</md-dialog-title>
            <md-dialog-content>
                <div class="flex">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem obcaecati non quo sed nisi hic enim libero sint aut molestiae fugiat, laborum iure nobis provident ipsam voluptatibus omnis eveniet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem obcaecati non quo sed nisi hic enim libero sint aut molestiae fugiat, laborum iure nobis provident ipsam voluptatibus omnis eveniet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem obcaecati non quo sed nisi hic enim libero sint aut molestiae fugiat, laborum iure nobis provident ipsam voluptatibus omnis eveniet.</p>
                </div>
            </md-dialog-content>
        </md-dialog>
    </div>
</template>

<script>
import CompleteMenu from './CompleteMenu'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Slider, SliderItem } from 'vue-easy-slider'

import {mapGetters, mapMutations} from 'vuex'
import { totalmem } from 'os';
export default {  
    name: 'MenuSlider',
    components: {
        CompleteMenu,
        swiper, 
        swiperSlide,
        Slider,
        SliderItem
    },
    props:{
        currentMenuDay: {
            type: String,
            required: true,
        }
    },
    data() {
      return {
        veggieMode: false,
        payData: false,
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 3, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 3,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 3, //looped slides should be the same
          slideToClickedSlide: true,
        },
        showKart: false,
      }
    },
    computed: {
        ...mapGetters([
            'weekClassicMenu',
            'weekDay',
            'myShopKart',
            'priceKart'
        ]),
    },
    methods: {
        ...mapMutations([
            'addMenu',
            'add15toPrice',
            'removeMenu',
            'remove15toPrice',
            'setKartValueInState',
            'getCookie'
        ]),
        emitValue(data){
            this.$emit('currentMenuDay', data)
        },
        getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }
    },
    created(){
        this.$emit('md-changed');
        if(Object.keys(this.myShopKart).length === 0){
            let kartFromStorage = JSON.parse(this.getCookie("yumyKart")) || {};
            this.setKartValueInState(kartFromStorage)
        }
    },
    updated(){
        document.cookie = `yumyKart=${JSON.stringify(this.myShopKart)}; expires=31536e3, ${new Date()}`;
    }
}

</script>
