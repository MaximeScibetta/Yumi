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
    },
    removeMenu(state, payload) {
        delete state.myShopKart[payload]
    },
    addDrinkToMenu(state, payload){
        let id = payload[0].id, 
            name = payload[0].name,
            price = payload[0].price,
            currentMenuDay = payload[1],
            quantity = 1;

        let newObject = { id, name, price, quantity, currentMenuDay }

        state.myShopKart[currentMenuDay].drinks.push(newObject)
    },
    add15toPrice(state){
        let currentPrice = state.priceKart;
        state.priceKart = currentPrice + 15;
    },
    remove15toPrice(state) {
        let currentPrice = state.priceKart;
        state.priceKart = currentPrice - 15;
    }
}