
import router from './router'
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
    },
    removeMenu(state, payload) {
        if(router.history.current.name === 'Kart'){
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

            delete state.myShopKart[payload]
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
    }
}