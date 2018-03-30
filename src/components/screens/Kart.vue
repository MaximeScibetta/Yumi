<template>
    <div class="kart" id="coordonees">
        <div class="kart__mobile">
            <div class="recap" v-if="Object.keys(myShopKart).length !== 0">
                <div class="recap__content" v-if="!startCommande">
                    <h2 v-if="Object.keys(myShopKart).length !== 0">Votre panier</h2>
                    <h2 v-else>Votre panier est vide</h2>
                    <template v-if="Object.keys(myShopKart).length !== 0" v-for="(item, key) in myShopKart">
                        <div class="item" :key="key">
                            <div class="item__image">
                                <img :src="item.image" alt="">
                                <p class="date">{{item.shortDate}}</p>
                                <button class="delete" @click="removeMenu(item.currentMenuDay)">Supprimer</button>
                            </div>
                            <div class="item__description">
                                <p class="title">{{item.name}}</p>
                                <button v-if="item.drinks.length === 0" class="addMore" @click="addDrink = true; addDrinkDay = item.currentMenuDay;">+ Ajouter une boisson</button>
                                <template v-else v-for="(drink, key) in item.drinks">
                                    <p :key="key" class="boisson">{{drink.quantity}}x {{drink.name}}</p>
                                </template>
                                <div class="item__quantity">
                                    <p>Quantité:</p>
                                    <input type="number" min="0" max="100" v-model="item.quantity"  @click="price()">
                                </div>
                                <p class="item__price">{{item.price * parseFloat(item.quantity) }}  €</p>
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
                                <dd>{{priceKart}} €</dd>
                                <dt>Livraison :</dt>
                                <dd>{{deliveryPrice}}0 €</dd>
                                <dt>T.V.A. :</dt>
                                <dd>Comprise</dd>
                                <dt class="end">Montant :</dt>
                                <dd class="end">{{priceKart + 1.5}} €</dd>
                            </dl>
                        </div>
                        <button v-if="!startCommande && Object.keys(myShopKart).length !== 0" class="commande" @click="startCommande = true;" v-scroll-to="'#coordonees'">Passer la commande</button>
                    </div>
                </div>
                <div class="recap__form" v-if="startCommande">
                    <h1>Coordonnées</h1>
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
                            <md-option value="18:00-18:30">18h00 - 18h30</md-option>
                            <md-option value="13:30-19:00">18h30 - 19h00</md-option>
                            <md-option value="19:00-19:30">19h00 - 19h30</md-option>
                            <md-option value="19:30-20:00">19h30 - 20h00</md-option>
                            <md-option value="20:00-20:30">20h00 - 20h30</md-option>
                            <md-option value="20:30-21:00">20h30 - 21h00</md-option>
                            <md-option value="21:00-21:30">21h00 - 21h30</md-option>
                            <md-option value="21:30-22:00">21h30 - 22h00</md-option>
                        </md-select>
                    </md-field>
                    <button class="commande" @click="send([form, myShopKart, priceKart])">Acheter</button>
                </div>
            </div>
            <md-empty-state v-else
                md-icon="remove_shopping_cart"
                md-label="Votre panier est vide"
                md-description="Votre panier est actuellement vide. Choisissez un menu pour le remplir.">
                <md-button class="md-primary md-raised" @click="$router.push({ name: 'Home'})">Choisir un menu</md-button>
            </md-empty-state>
        </div>
        <div class="kart__desktop">
            <div class="recap" v-if="Object.keys(myShopKart).length !== 0">
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
                                <button v-if="item.drinks.length === 0" class="addMore" @click="addDrink = true; addDrinkDay = item.currentMenuDay;">+ Ajouter une boisson</button>
                                <template v-else v-for="(drink, key) in item.drinks">
                                    <p :key="key" class="boisson">{{drink.quantity}}x {{drink.name}}</p>
                                </template>
                                <p class="item__price">{{item.price * parseFloat(item.quantity)}} €</p>
                                <button class="delete" @click="removeMenu(item.currentMenuDay)">Supprimer</button>
                            </div>
                            <div class="item__quantity">
                                <p>Quantité:</p>
                                <input type="number" min="0" max="100" v-model="item.quantity" @click="price()">
                            </div>
                        </div>
                    </template>
                </div>
                <div class="recap__description">
                    <div class="description">
                        <div class="description__price">
                            <dl>
                                <dt>Articles :</dt>
                                <dd>{{priceKart}} €</dd>
                                <dt>Livraison :</dt>
                                <dd>{{deliveryPrice}}0 €</dd>
                                <dt>T.V.A. :</dt>
                                <dd>Comprise</dd>
                                <dt class="end">Montant :</dt>
                                <dd class="end">{{priceKart + 1.5}} €</dd>
                            </dl>
                        </div>
                        <button v-if="Object.keys(myShopKart).length !== 0" class="commande" @click="startCommande = true">Passer la commande</button>
                    </div>
                </div>
                <md-dialog id="modalForm" :md-active.sync="startCommande">
                    <md-dialog-title>Coordonnées</md-dialog-title>
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
                            <md-option value="18:00-18:30">18h00 - 18h30</md-option>
                            <md-option value="13:30-19:00">18h30 - 19h00</md-option>
                            <md-option value="19:00-19:30">19h00 - 19h30</md-option>
                            <md-option value="19:30-20:00">19h30 - 20h00</md-option>
                            <md-option value="20:00-20:30">20h00 - 20h30</md-option>
                            <md-option value="20:30-21:00">20h30 - 21h00</md-option>
                            <md-option value="21:00-21:30">21h00 - 21h30</md-option>
                            <md-option value="21:30-22:00">21h30 - 22h00</md-option>
                            </md-select>
                        </md-field>
                        <span class="error" v-if="error">{{error}}</span>
                    </md-dialog-content>
                    <md-dialog-actions>
                        <md-button class="x" @click="startCommande = false"><md-icon>close</md-icon></md-button>
                        <md-button class="buy" @click="send([form, myShopKart, priceKart])">Acheter</md-button>
                    </md-dialog-actions>
                </md-dialog>
                <md-dialog id="addDrink" class="addDrink" :md-active.sync="addDrink">
                    <md-dialog-actions>
                        <md-button class="x" @click="addDrink = false"><md-icon>close</md-icon></md-button>
                    </md-dialog-actions>
                    <md-dialog-title>Compléter votre menu</md-dialog-title>
                    <md-dialog-content>
                        <div class="complete__menu">
                            <div class="complete__menu--item" v-for="drink in drinks" :key="drink.id">
                                <img :src="drink.image" width="300" height="200" alt="">
                                <div class="info">
                                    <button class="add" @click="addDrinkToMenu([drink, addDrinkDay]); addDrink = false;">+</button>
                                    <div class="info__data">
                                        <p>{{drink.name}} {{drink.format}}</p>
                                        <p>{{drink.price}} €</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </md-dialog-content>
                </md-dialog>
            </div>
            <md-empty-state v-else
                md-icon="remove_shopping_cart"
                md-label="Votre panier est vide"
                md-description="Votre panier est actuellement vide. Choisissez un menu pour le remplir.">
                <md-button class="md-primary md-raised" @click="$router.push({ name: 'Home'})">Choisir un menu</md-button>
            </md-empty-state>
        </div>
    </div>
</template>

<script>

import {mapGetters, mapMutations} from 'vuex'
import { apolloClient } from '../../apollo'
import gql from 'graphql-tag'
import swal from 'sweetalert2'

export default {
    name: 'Kart',
    data(){
        return{
            startCommande: false,
            addDrink: false,
            addDrinkDay: null,
            error: null,
            form: {
                firstName: '',
                surname: '',
                email: '',
                address: '',
                time: '',
            }
        }
    },
    computed: {
        ...mapGetters([
            'myShopKart',
            'priceKart',
            'deliveryPrice',
            'drinks'
        ]),
    },
    methods: {
        ...mapMutations([
            'removeMenu',
            'setKartValueInState',
            'addDrinkToMenu',
            'price',
            'sendData',
            'cleanKart'
        ]),
        getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        },
        send(data){
            let firstname = data[0].firstName,
                surname = data[0].surname,
                address = data[0].address,
                email = data[0].email,
                time = data[0].time,
                userKart = data[1],
                priceKart = data[2];

            if(firstname !== '' && surname !== '' && address !== '' && email !== '' && time !== ''){
                apolloClient.mutate({
                    mutation: gql`
                        mutation createUserData
                            ($firstname: String!,
                            $surname: String!,
                            $email: String!,
                            $time: String!,
                            $address: String!,
                            $priceKart: Int!,
                            $userKart: Json!){
                                createUserData(data: {
                                    firstname: $firstname, 
                                    surname: $surname, 
                                    email: $email,
                                    time: $time,
                                    address: $address,
                                    priceKart: $priceKart,
                                    userKart: $userKart}){
                                        id
                                    }
                            }
                    `,
                    variables: {
                        firstname, surname, email, 
                        time, address, priceKart, userKart
                    }

                }).then( data => {
                    this.startCommande = false;
                    this.cleanKart()
                    swal({
                        html:
                        `
                        <svg style="width: 100px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <path style="fill:#A06047;" d="M174.659,512c-4.145,0-7.505-3.36-7.505-7.505c0-20.791-8.571-30.739-18.497-42.259
                                    c-10.376-12.042-22.136-25.69-22.136-52.056c0-26.366,11.761-40.014,22.136-52.056c9.925-11.519,18.497-21.468,18.497-42.259
                                    c0-4.145,3.36-7.505,7.505-7.505s7.505,3.36,7.505,7.505c0,26.366-11.761,40.015-22.137,52.057
                                    c-9.925,11.518-18.496,21.467-18.496,42.258c0,20.791,8.571,30.738,18.496,42.258c10.377,12.042,22.137,25.691,22.137,52.057
                                    C182.164,508.64,178.804,512,174.659,512z"/>
                                <path style="fill:#A06047;" d="M309.12,511.83c-2.86,0-5.593-1.644-6.846-4.42c-4.175-9.254-6.206-19.422-6.206-31.086
                                    c0-26.086,10.221-39.677,19.24-51.668c8.706-11.576,16.225-21.575,16.225-42.646c0-4.145,3.36-7.505,7.505-7.505
                                    s7.505,3.36,7.505,7.505c0,26.086-10.221,39.677-19.24,51.668c-8.706,11.576-16.225,21.575-16.225,42.646
                                    c0,9.623,1.549,17.539,4.878,24.913c1.705,3.778,0.024,8.223-3.755,9.928C311.2,511.616,310.151,511.83,309.12,511.83z"/>
                            </g>
                            <ellipse style="fill:#00DDC2;" cx="311.545" cy="115.974" rx="99.583" ry="115.974"/>
                            <path style="fill:#00BCA1;" d="M411.131,115.97c0,64.05-44.589,115.969-99.586,115.969c-7.093,0-14.008-0.86-20.676-2.5
                                c45.085-11.083,78.918-57.675,78.918-113.47S335.954,13.584,290.869,2.501C297.538,0.861,304.453,0,311.546,0
                                C366.544,0,411.131,51.921,411.131,115.97z"/>
                            <path style="fill:#CE1D4C;" d="M187.469,309.752l-6.52-12.996h-8.434h-8.432l-6.52,12.996c-1.479,2.948,0.664,6.421,3.963,6.421
                                h21.982C186.805,316.173,188.948,312.7,187.469,309.752z"/>
                            <path style="fill:#F7D443;" d="M354.434,375.895l-6.52-12.997h-8.434h-8.432l-6.52,12.997c-1.479,2.948,0.664,6.421,3.963,6.421
                                h21.982C353.769,382.315,355.913,378.843,354.434,375.895z"/>
                            <ellipse style="fill:#E84661;" cx="172.514" cy="180.782" rx="99.583" ry="115.974"/>
                            <path style="fill:#CE1D4C;" d="M272.098,180.784c0,64.05-44.588,115.969-99.586,115.969c-7.093,0-14.008-0.86-20.676-2.5
                                c45.085-11.083,78.918-57.675,78.918-113.47s-33.834-102.387-78.918-113.47c6.668-1.64,13.583-2.5,20.676-2.5
                                C227.51,64.813,272.098,116.734,272.098,180.784z"/>
                            <ellipse style="fill:#FFE269;" cx="339.486" cy="246.93" rx="99.583" ry="115.974"/>
                            <path style="fill:#F7D443;" d="M439.06,246.925c0,64.05-44.579,115.969-99.577,115.969c-7.572,0-14.949-0.985-22.041-2.846
                                c44.402-11.686,77.552-57.896,77.552-113.123s-33.15-101.438-77.552-113.115c7.093-1.87,14.47-2.855,22.041-2.855
                                C394.481,130.955,439.06,182.876,439.06,246.925z"/>
                        </svg>
                        `
                        +
                        '<h1 style="font-size: 20px; text-transform: inherit;">Mille mercis pour votre participation !</h1>'
                        +
                        '<p>Malheureusement, YUMY n’est pas encore actif à ce jour… Afin de récolter les fonds nécessaires, notre équipe a mis en place <b>une période de testing</b> afin de mesurer l’intérêt porté au concept au sein des grandes villes belges. </p>'
                        + 
                        '<p>Toutefois, <b>grâce à vous</b>, YUMY fait un pas de plus vers son lancement ! <b>C’est génial</b>, on ne peut que vous remercier !</p>' 
                        + 
                        '<p>Pour vous <b>remercier de l’intérêt</b> que vous portez à notre projet, nous nous engageons à vous offrir <b>une réduction de 5€</b> sur votre première commande. Vous serez les premiers avertis par e-mail</p>',
                        footer: '<a href="http://yumybruxelles.be/#/apropos">Vous voulez en connaître davantage à notre sujet ?</a>',
                        showCloseButton: true,
                    });
                })
            }else{
                this.error = 'Tous les champs ne sont pas complets, complétez-les et réessayez.';
            }
        }
    },
    created(){
        if(Object.keys(this.myShopKart).length === 0){
            let kartFromStorage = JSON.parse(this.getCookie("yumyKart")) || {};
            this.setKartValueInState(kartFromStorage)
            this.price()
        }
    },
    updated(){
        let kartContent = JSON.stringify(this.myShopKart) || {};
        document.cookie = `yumyKart=${kartContent}; expires=31536e3, ${new Date()}`;
    }
}
</script>
