
import router from './router'
import bus from './main.js'
export const mutations = {
    addMenu(state, payload){
        let id = payload[0].id,
            name = payload[0].name,
            price = payload[0].price,
            date = payload[0].longDate,
            currentMenuDay = payload[1],
            quantity = 1,
            image = payload[0].images.dish,
            shortDate = payload[0].shortDate,
            drinks = [];

        let newObject = { id, name, price, date, drinks, quantity, currentMenuDay, image, shortDate }

         state.myShopKart[currentMenuDay] = newObject;

        // CALUATE PRICE
            var priceKart = 0;
        if (Object.keys(state.myShopKart).length !== 0) {
                Object.keys(state.myShopKart).map(item => {
                    priceKart += state.myShopKart[item].price * parseFloat(state.myShopKart[item].quantity);
                    if (state.myShopKart[item].drinks.length !== 0) {
                        state.myShopKart[item].drinks.map(drink => {
                            priceKart += drink.price * parseFloat(drink.quantity);
                        })
                    }
                })
            }
        state.priceKart = priceKart;
        state.kartSize++;
    },
    removeMenu(state, payload) {
        if(router.history.current.name === 'Kart'){
            if (state.myShopKart[payload].drinks.length !== 0) {
                state.kartSize--
                state.myShopKart[payload].drinks.map( drink => {
                    console.log(drink)
                    state.kartSize--
                })
            }else{
                state.kartSize--
            }

            delete state.myShopKart[payload]
            let kartContent = JSON.stringify(this.myShopKart) || JSON.stringify({});
            document.cookie = `yumyKart=${kartContent}; expires=31536e3, ${new Date()}`;

            // CALUATE PRICE
            var priceKart = 0;
            if (Object.keys(state.myShopKart).length !== 0) {
                Object.keys(state.myShopKart).map(item => {
                    priceKart += state.myShopKart[item].price * parseFloat(state.myShopKart[item].quantity);
                    if (state.myShopKart[item].drinks.length !== 0) {
                        state.myShopKart[item].drinks.map(drink => {
                            priceKart += drink.price * parseFloat(drink.quantity);
                        })
                    }
                })
            }
            state.priceKart = priceKart;

            // location.reload();
        } else {
            delete state.myShopKart[payload]

            // CALUATE PRICE
            var priceKart = 0;
            if (Object.keys(state.myShopKart).length !== 0) {
                Object.keys(state.myShopKart).map(item => {
                    priceKart += state.myShopKart[item].price * parseFloat(state.myShopKart[item].quantity);
                    if (state.myShopKart[item].drinks.length !== 0) {
                        state.myShopKart[item].drinks.map(drink => {
                            priceKart += drink.price * parseFloat(drink.quantity);
                        })
                    }
                })
            }
            state.priceKart = priceKart;

        }

    },
    addDrinkToMenu(state, payload){
        let id = payload[0].id, 
            name = payload[0].name,
            price = payload[0].price,
            currentMenuDay = payload[1],
            quantity = 1;

        let newObject = { id, name, price, quantity, currentMenuDay }

        state.myShopKart[currentMenuDay].drinks.push(newObject)

        // CALUATE PRICE
        var priceKart = 0;
        if (Object.keys(state.myShopKart).length !== 0) {
            Object.keys(state.myShopKart).map(item => {
                priceKart += state.myShopKart[item].price * parseFloat(state.myShopKart[item].quantity);
                if (state.myShopKart[item].drinks.length !== 0) {
                    state.myShopKart[item].drinks.map(drink => {
                        priceKart += drink.price * parseFloat(drink.quantity);
                    })
                }
            })
        }
        state.priceKart = priceKart;
        state.kartSize++;

    },
    // Set value of kart in state
    setKartValueInState(state, payload) {
        state.myShopKart = payload
    },
    price(state){
        // CALUATE PRICE
        var priceKart = 0;
        if (Object.keys(state.myShopKart).length !== 0) {
            Object.keys(state.myShopKart).map(item => {
                priceKart += state.myShopKart[item].price * parseFloat(state.myShopKart[item].quantity);
                if (state.myShopKart[item].drinks.length !== 0) {
                    state.myShopKart[item].drinks.map(drink => {
                        priceKart += drink.price * parseFloat(drink.quantity);
                    })
                }
            })
        }
        state.priceKart = priceKart;
    },
    location(state, payload){
        state.locationIsGood = payload;
    },
    cleanKart(state) {
        state.myShopKart = {};
        state.priceKart = 0;
        state.kartSize = 0;
        let kartContent = JSON.stringify(this.myShopKart) || JSON.stringify({});
        document.cookie = `yumyKart=${kartContent}; expires=31536e3, ${new Date()}`;
    },
    kartSize(state){
        var size = 0;
        if (Object.keys(state.myShopKart).length !== 0) {
            Object.keys(state.myShopKart).map(item => {
                size++;
                if (state.myShopKart[item].drinks.length !== 0) {
                    state.myShopKart[item].drinks.map(drink => {
                        size++;
                    })
                }
            })
        }
        state.kartSize = size;
    }
}