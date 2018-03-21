export const mutations = {
    addMenu(state, payload){
        let id = payload[0].id,
            name = payload[0].name,
            price = payload[0].price,
            date = payload[0].longDate,
            currentMenuDay = payload[1],
            drinks = [];

        let newObject = { id, name, price, date, drinks }

        state.myShopKart[currentMenuDay] = newObject;
    },
    addDrinkToMenu(state, payload){
        let id = payload[0].id, 
            name = payload[0].name,
            price = payload[0].price,
            currentMenuDay = payload[1];

        let newObject = { id, name, price }

        state.myShopKart[currentMenuDay].drinks.push(newObject)


    }
}