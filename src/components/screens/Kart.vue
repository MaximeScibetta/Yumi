<template>
    <div class="kart">
        <div class="kart__mobile">
            <div class="recap">
                <div class="recap__content" v-if="!startCommande">
                    <h2 v-if="Object.keys(myShopKart).length !== 0">Votre panier</h2>
                    <h2 v-else>Votre panier est vide</h2>
                    <template v-if="Object.keys(myShopKart).length !== 0" v-for="(item, key) in myShopKart">
                        <div class="item" :key="key">
                            <div class="item__image">
                                <img :src="item.image" alt="">
                                <p class="date">{{item.shortDate}}</p>
                                <button class="delete">Supprimer</button>
                            </div>
                            <div class="item__description">
                                <p class="title">{{item.name}}</p>
                                <button v-if="item.drinks.length === 0" class="addMore" @click="addDrink = true">+ Ajouter une boisson</button>
                                <template v-else v-for="(drink, key) in item.drinks">
                                    <p :key="key" class="boisson">{{drink.quantity}}x {{drink.name}}</p>
                                </template>
                                <div class="item__quantity">
                                    <p>Quantité:</p>
                                    <input type="number" min="0" max="100" :value="item.quantity">
                                </div>
                                <p class="item__price">{{item.price}} €</p>
                            </div>
                        </div>
                    </template>
                    <p v-else>Vous n'avez aucun élément dans votre panier.</p>
                </div>
                <div class="recap__header">
                    <div class="description">
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
                        <button v-if="!startCommande" class="commande" @click="startCommande = true">Passer la commande</button>
                    </div>
                </div>
                <div class="recap__form" v-if="startCommande">
                    <h1>Formulaire</h1>
                    <md-field>
                        <md-icon>account_circle</md-icon>
                        <label for="first-name">Prénom</label>
                        <md-input name="first-name" id="first-name" v-model="form.firstName"/>
                    </md-field>
                    <md-field>
                        <md-icon>account_circle</md-icon>
                        <label for="surnname">Nom</label>
                        <md-input name="surnname" id="surnname" v-model="form.surname"/>
                    </md-field>
                    <md-field>
                        <md-icon>email</md-icon>
                        <label for="email">Email</label>
                        <md-input name="email" id="email" v-model="form.email"/>
                    </md-field>
                    <md-field>
                        <md-icon>location_on</md-icon>
                        <label for="address">Adresse de livraison</label>
                        <md-input name="address" id="address" v-model="form.address"/>
                    </md-field>
                    <md-field>
                        <md-icon>access_time</md-icon>
                        <label for="movie">Tranche horaire</label>
                        <md-select v-model="form.time" name="time" id="time">
                            <md-option value="12:00-12:30">12h00 - 12h30</md-option>
                            <md-option value="12:30-13:00">12h30 - 13h00</md-option>
                            <md-option value="13:00-13:30">13h00 - 13h30</md-option>
                            <md-option value="13:30-14:00">13h30 - 14h00</md-option>
                            <md-option value="14:00-14:30">14h00 - 14h30</md-option>
                        </md-select>
                    </md-field>
                    <button class="commande">Acheter</button>
                </div>
            </div>
        </div>
        <div class="kart__desktop">
            <div class="recap">
                <div class="recap__content">
                    <h2 v-if="Object.keys(myShopKart).length !== 0">Votre panier</h2>
                    <h2 v-else>Votre panier est vide</h2>
                    <template v-if="Object.keys(myShopKart).length !== 0" v-for="(item, key) in myShopKart">
                        <div :key="key" class="item">
                            <div class="item__image">
                                <img :src="item.image" alt="">
                                <p class="date">{{item.shortDate}}</p>
                            </div>
                            <div class="item__description">
                                <p class="title">{{item.name}}</p>
                                <button v-if="item.drinks.length === 0" class="addMore" @click="addDrink = true">+ Ajouter une boisson</button>
                                <template v-else v-for="(drink, key) in item.drinks">
                                    <p :key="key" class="boisson">{{drink.quantity}}x {{drink.name}}</p>
                                </template>
                                <p class="item__price">{{item.price}} €</p>
                                <button class="delete">Supprimer</button>
                            </div>
                            <div class="item__quantity">
                                <p>Quantité:</p>
                                <input type="number" min="0" max="100" :value="item.quantity">
                            </div>
                        </div>
                    </template>
                </div>
                <div class="recap__description">
                    <div class="description">
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
                        <button class="commande" @click="startCommande = true">Passer la commande</button>
                    </div>
                </div>
                <md-dialog :md-active.sync="startCommande">
                    <md-dialog-title>Formulaire</md-dialog-title>
                    <md-dialog-content>
                        <md-field>
                            <md-icon>account_circle</md-icon>
                            <label for="first-name">Prénom</label>
                            <md-input name="first-name" id="first-name" v-model="form.firstName"/>
                        </md-field>
                        <md-field>
                            <md-icon>account_circle</md-icon>
                            <label for="surnname">Nom</label>
                            <md-input name="surnname" id="surnname" v-model="form.surname"/>
                        </md-field>
                        <md-field>
                            <md-icon>email</md-icon>
                            <label for="email">Email</label>
                            <md-input name="email" id="email" v-model="form.email"/>
                        </md-field>
                        <md-field>
                            <md-icon>location_on</md-icon>
                            <label for="address">Adresse de livraison</label>
                            <md-input name="address" id="address" v-model="form.address"/>
                        </md-field>
                        <md-field>
                            <md-icon>access_time</md-icon>
                            <label for="movie">Tranche horaire</label>
                            <md-select v-model="form.time" name="time" id="time">
                                <md-option value="12:00-12:30">12h00 - 12h30</md-option>
                                <md-option value="12:30-13:00">12h30 - 13h00</md-option>
                                <md-option value="13:00-13:30">13h00 - 13h30</md-option>
                                <md-option value="13:30-14:00">13h30 - 14h00</md-option>
                                <md-option value="14:00-14:30">14h00 - 14h30</md-option>
                            </md-select>
                        </md-field>
                    </md-dialog-content>
                    <md-dialog-actions>
                        <md-button class="x" @click="startCommande = false"><md-icon>close</md-icon></md-button>
                        <md-button class="buy" @click="startCommande = false">Acheter</md-button>
                    </md-dialog-actions>
                </md-dialog>
                <md-dialog id="addDrink" class="addDrink" :md-active.sync="addDrink">
                    <md-dialog-actions>
                        <md-button class="x" @click="addDrink = false"><md-icon>close</md-icon></md-button>
                    </md-dialog-actions>
                    <md-dialog-title>Compléter votre menu</md-dialog-title>
                    <md-dialog-content>
                        <div class="complete__menu">
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                            <div class="complete__menu--item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefQ9i_envvQNj9DXOX9QT4YInamnu9i80e8xaYhRNPbcKn7fW" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add">+</button>
                                    <div class="info__data">
                                        <p>Bouteille d'eau 50cl</p>
                                        <p>3,00 €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </md-dialog-content>
                </md-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'Kart',
    components: {
    },
    data(){
        return{
            startCommande: false,
            addDrink: false,
            form: {
                firstName: null,
                surname: null,
                email: null,
                address: null,
                time: null,
            }
        }
    },
    computed: {
        ...mapGetters([
            'myShopKart',
            'priceKart'
        ]),
    },
}
</script>