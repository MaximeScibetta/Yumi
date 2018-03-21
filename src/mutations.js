export const mutations = {
    addMenu(state, payload){
        let id = payload.id,
            name = payload.name,
            price = payload.price,
            date = payload.longDate;

        let newObject = { id, name, price, date }

        state.myShopKart.push(newObject)
    }
}