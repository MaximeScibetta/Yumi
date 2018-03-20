import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations.js'
import { getters } from './getters.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        classic_menus: [
            {
                "id": 0,
                "name": "Faux filet et sa sauce au vin rouge, lundi",
                "price": 15,
                "shortDate": "LUN 2",
                "longDate": "Lundi 2 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 1,
                "name": "Faux filet et sa sauce au vin rouge, mardi",
                "price": 15,
                "shortDate": "MAR 20",
                "longDate": "Mardi 3 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 2,
                "name": "Faux filet et sa sauce au vin rouge, mercredi",
                "price": 15,
                "shortDate": "MER 21",
                "longDate": "Mercredi 4 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 3,
                "name": "Faux filet et sa sauce au vin rouge, jeudi",
                "price": 15,
                "shortDate": "JEU 22",
                "longDate": "Jeudi 5 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 4,
                "name": "Faux filet et sa sauce au vin rouge, vendredi",
                "price": 15,
                "shortDate": "VEN 23",
                "longDate": "Vendredi 6 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            }, 


            {
                "id": 5,
                "name": "Faux filet et sa sauce au vin rouge, lundi",
                "price": 15,
                "shortDate": "LUN 26",
                "longDate": "Lundi 2 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 6,
                "name": "Faux filet et sa sauce au vin rouge, mardi",
                "price": 15,
                "shortDate": "MAR 3",
                "longDate": "Mardi 3 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 7,
                "name": "Faux filet et sa sauce au vin rouge, mercredi",
                "price": 15,
                "shortDate": "MER 4",
                "longDate": "Mercredi 4 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 8,
                "name": "Faux filet et sa sauce au vin rouge, jeudi",
                "price": 15,
                "shortDate": "JEU 5",
                "longDate": "Jeudi 5 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            },
            {
                "id": 9,
                "name": "Faux filet et sa sauce au vin rouge, vendredi",
                "price": 15,
                "shortDate": "VEN 6",
                "longDate": "Vendredi 6 avril",
                "images": {
                    "entry": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/29242617_10213798307984083_1950571214_o.jpg?oh=8a557f13f8c6e498e940cf9e7bf3335f&oe=5AB2DE0A",
                    "dish": "https://scontent.fbru3-1.fna.fbcdn.net/v/t35.0-12/s2048x2048/28945230_10213798307304066_1793869592_o.jpg?oh=cd56eaa0073d76e2cace39ee54e93bd4&oe=5AB1F3BD",
                    "dessert": "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b3a0347e68dba64f130c186dc3f396ea&auto=format&fit=crop&w=1369&q=80"
                },
                "dish": {
                    "entry": "Potage vert",
                    "dish": "Faux filet et sa sauce au vin rouge",
                    "dessert": "Crème au chocolat"
                },
                "ingredient": {
                    "entry": "oignon, ail, huile d'olive, bouillon de poulet, brocoli, asperge, épinard, sel, poivre, fromage feta",
                    "dish": "faux-filet de boeuf, oignon rouge, thym, vin rouge, eau, beurre, sel, poivre",
                    "dessert": "chocolat noir, jaune d'oeuf, blanc d'oeuf, lait, sucre vanillé, sucre, maïzena, crème liquide, chocolat"
                }
            }, 
        ]
    },
    mutations,
    getters
})