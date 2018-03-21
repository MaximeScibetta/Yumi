export const mutations = {
    addMenu(state, payload){
        let id = payload[0].id,
            name = payload[0].name,
            price = payload[0].price,
            date = payload[0].longDate,
            currentMenuDay = payload[1];

        let newObject = { id, name, price, date }

        state.myShopKart[currentMenuDay] = newObject;
    }
}