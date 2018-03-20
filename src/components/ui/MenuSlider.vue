<template>
    <div class="menuContent">
        <div class="center">
            <p class="write">Faites votre choix :</p>
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
        <md-tabs key="2"  v-show="!veggieMode"  md-active-tab="tab-day1" md-dynamic-height class="days">
            <md-tab id="tab-day1" md-label="LUN 2">
                <p class="date">Lundi 2 avril</p>
                <h1>Faux filet et sa sauce au vin rouge</h1>
                <div class="image">
                    <slider animation="fade">
                        <slider-item>
                            <div style="background: url('https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A'); height: 100%; width: 100%; background-size: cover; background-position: center;">
                            </div>
                        </slider-item>
                        <slider-item>
                            <div style="background: url('https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD'); height: 100%; width: 100%; background-size: cover; background-position: center;">
                            </div>
                        </slider-item>
                        <slider-item>
                            <div style="background: url('https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80'); height: 100%; width: 100%; background-size: cover; background-position: center;">
                            </div>
                        </slider-item>
                    </slider>
                </div>
                <div class="group">
                    <div class="addToKart">
                        <span class="price">15€</span>
                        <button @click="showKart = true" v-scroll-to="'#drinks'" class="addKart">
                            + Ajouter au panier
                        </button>
                        <div class="payData" @click="payData = true"><md-icon>info_outline</md-icon><span>Moyens de paiement acceptés</span></div>
                    </div>
                    <md-tabs>
                        <md-tab id="plats" md-label="plats">
                            <ul>
                                <li>Entrée</li>
                                <li>Potage vert</li>
                                <li>Plat</li>
                                <li>Faux filet et sa sauce au vin rouge</li>
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
                <h1>Faux filet et sa sauce au vin rouge</h1>
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
                                <li>Faux filet et sa sauce au vin rouge</li>
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
                <h1>Faux filet et sa sauce au vin rouge</h1>
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
                                <li>Faux filet et sa sauce au vin rouge</li>
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
                <h1>Faux filet et sa sauce au vin rouge</h1>
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
                                <li>Faux filet et sa sauce au vin rouge</li>
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
                <h1>Faux filet et sa sauce au vin rouge</h1>
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
                                <li>Faux filet et sa sauce au vin rouge</li>
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
        <complete-menu id="drinks"></complete-menu>
        <md-dialog class="recapKart" :md-active.sync="showKart">
            <md-dialog-title>Récapitulatif</md-dialog-title>
            <md-dialog-content>
                <div class="description">
                    <ul class="description__content">
                        <li><p>Potage vert, Faux filet veggie et sa sauce au vin rouge, Crème au chocolat</p></li>
                        <li><p>Potage vert, Faux filet veggie et sa sauce au vin rouge, Crème au chocolat</p></li>
                        <li><p>Bouteille de vin 50cl</p></li>
                    </ul>
                    <div class="description__price">
                        <dl>
                            <dt>Articles :</dt>
                            <dd>33,00 €</dd>
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
                <md-button class="buy" @click="showKart = false">Passer la commande</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog class="payData" :md-active.sync="payData">
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
export default {  
    name: 'MenuSlider',
    components: {
        CompleteMenu, swiper, swiperSlide,
    Slider,
    SliderItem
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
    mounted() {
      this.$nextTick(() => {
        const swiperTop1 = this.$refs.swiperTop1.swiper
        const swiperThumbs1 = this.$refs.swiperThumbs1.swiper
        swiperTop1.controller.control = swiperThumbs1
        swiperThumbs1.controller.control = swiperTop1

        const swiperTop2 = this.$refs.swiperTop2.swiper
        const swiperThumbs2 = this.$refs.swiperThumbs2.swiper
        swiperTop2.controller.control = swiperThumbs2
        swiperThumbs2.controller.control = swiperTop2

        
        const swiperTop3 = this.$refs.swiperTop3.swiper
        const swiperThumbs3 = this.$refs.swiperThumbs3.swiper
        swiperTop3.controller.control = swiperThumbs3
        swiperThumbs3.controller.control = swiperTop3

    
        const swiperTop4 = this.$refs.swiperTop4.swiper
        const swiperThumbs4 = this.$refs.swiperThumbs4.swiper
        swiperTop4.controller.control = swiperThumbs4
        swiperThumbs4.controller.control = swiperTop4
        

        const swiperTop5 = this.$refs.swiperTop5.swiper
        const swiperThumbs5 = this.$refs.swiperThumbs5.swiper
        swiperTop5.controller.control = swiperThumbs5
        swiperThumbs5.controller.control = swiperTop5
      })
    },
}
</script>
