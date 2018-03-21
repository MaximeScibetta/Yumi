<template>
    <div class="kart">
        <div class="kart__mobile">
            <div class="recap">
                <div class="recap__content" v-if="!startCommande">
                    <h1>Votre panier</h1>
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">02/04</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <button class="addMore" @click="addDrink = true">+ Ajouter une boisson</button>
                            <div class="item__quantity">
                                <p>Quantité:</p>
                                <input type="number" min="0" max="100" value="1">
                            </div>
                            <p class="item__price">15,00 €</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">03/04</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <p class="boisson">Bouteille d'eau 50cl</p>
                            <div class="item__quantity">
                                <p>Quantité:</p>
                                <input type="number" min="0" max="100" value="1">
                            </div>
                            <p class="item__price">15,00 €</p>
                        </div>
                    </div>
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
                    <h2>Votre panier</h2>
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">02/04</p>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <button class="addMore" @click="addDrink = true">+ Ajouter une boisson</button>
                            <p class="item__price">15,00 €</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__quantity">
                            <p>Quantité:</p>
                            <input type="number" min="0" max="100" value="1">
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__image">
                            <img src="https://images.unsplash.com/photo-1504973960431-1c467e159aa4?ixlib=rb-0.3.5&s=2195ba5081c67a1865b0d2c284d43853&auto=format&fit=crop&w=1350&q=80" alt="">
                            <p class="date">03/04</p>
                        </div>
                        <div class="item__description">
                            <p class="title">Potage vert, Faux filet et sa sauce au vin rouge, Crème au chocolat</p>
                            <p class="boisson">Bouteille d'eau 50cl</p>
                            <p class="item__price">15,00 €</p>
                            <button class="delete">Supprimer</button>
                        </div>
                        <div class="item__quantity">
                            <p>Quantité:</p>
                            <input type="number" min="0" max="100" value="1">
                        </div>
                    </div>
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
    }
}
</script>