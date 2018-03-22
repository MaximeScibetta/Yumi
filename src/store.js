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
                "shortDate": "MER 28",
                "longDate": "Mercredi 21 mars",
                "idDate": "28032018",
                "images": {
                    "entry": "https://munchery.imgix.net/menu-items/21178/chefs-1471-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2200%2C2200&s=8ab6d5c360c74834213b92dba4d27ba1",
                    "dish": "https://munchery.imgix.net/menu-items/22774/chef-904-peanut-tofu-stir-fry-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=1449%2C403%2C2726%2C2726&s=1f62bcc31760f76d1731e0afd055c427",
                    "dessert": "https://munchery.imgix.net/menu-items/22288/chefs-1582-v4-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2500%2C2500&s=f7aff4ccaf3f7b52001068ad9a540bb9"
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
                "shortDate": "JEU 22",
                "longDate": "Jeudi 22 mars",
                "idDate": "22032018",
                "images": {
                    "entry": "https://munchery.imgix.net/menu-items/21178/chefs-1471-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2200%2C2200&s=8ab6d5c360c74834213b92dba4d27ba1",
                    "dish": "https://munchery.imgix.net/menu-items/22774/chef-904-peanut-tofu-stir-fry-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=1449%2C403%2C2726%2C2726&s=1f62bcc31760f76d1731e0afd055c427",
                    "dessert": "https://munchery.imgix.net/menu-items/22288/chefs-1582-v4-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2500%2C2500&s=f7aff4ccaf3f7b52001068ad9a540bb9"
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
                "shortDate": "VEN 23",
                "longDate": "Vendredi 23 mars",
                "idDate": "23032018",
                "images": {
                    "entry": "https://munchery.imgix.net/menu-items/21178/chefs-1471-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2200%2C2200&s=8ab6d5c360c74834213b92dba4d27ba1",
                    "dish": "https://munchery.imgix.net/menu-items/22774/chef-904-peanut-tofu-stir-fry-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=1449%2C403%2C2726%2C2726&s=1f62bcc31760f76d1731e0afd055c427",
                    "dessert": "https://munchery.imgix.net/menu-items/22288/chefs-1582-v4-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2500%2C2500&s=f7aff4ccaf3f7b52001068ad9a540bb9"
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
                "shortDate": "LUN 26",
                "longDate": "Lundi 26 mars",
                "idDate": "26032018",
                "images": {
                    "entry": "https://munchery.imgix.net/menu-items/21178/chefs-1471-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2200%2C2200&s=8ab6d5c360c74834213b92dba4d27ba1",
                    "dish": "https://munchery.imgix.net/menu-items/22774/chef-904-peanut-tofu-stir-fry-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=1449%2C403%2C2726%2C2726&s=1f62bcc31760f76d1731e0afd055c427",
                    "dessert": "https://munchery.imgix.net/menu-items/22288/chefs-1582-v4-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2500%2C2500&s=f7aff4ccaf3f7b52001068ad9a540bb9"
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
                "shortDate": "MAR 27",
                "longDate": "Mardi 27 mars",
                "idDate": "27032018",
                "images": {
                    "entry": "https://munchery.imgix.net/menu-items/21178/chefs-1471-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2200%2C2200&s=8ab6d5c360c74834213b92dba4d27ba1",
                    "dish": "https://munchery.imgix.net/menu-items/22774/chef-904-peanut-tofu-stir-fry-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=1449%2C403%2C2726%2C2726&s=1f62bcc31760f76d1731e0afd055c427",
                    "dessert": "https://munchery.imgix.net/menu-items/22288/chefs-1582-v4-jpg.?dpr=2.0&q=70&sharp=3&vib=10&gam=-10&w=344&h=344&fit=crop&rect=0%2C0%2C2500%2C2500&s=f7aff4ccaf3f7b52001068ad9a540bb9"
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
        ],
        myShopKart: {},
        priceKart: 0,
    },
    mutations,
    getters
})