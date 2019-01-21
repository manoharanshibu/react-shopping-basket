const initialState = {
    items: [
        {id: 0, name: 'Mountain Dew', quantity: 2, unitPrice: 1.80}, 
        {id: 1, name: 'Desperados', quantity: 6, unitPrice: 2.50}, 
        {id: 2, name: 'Jack Daniels', quantity: 4, unitPrice: 3.50},
        {id: 10, name: 'Chivas Regal', quantity: 2, unitPrice: 11.80}, 
        {id: 11, name: 'Famous Grouse', quantity: 3, unitPrice: 12.50}, 
        {id: 12, name: 'Guinness', quantity: 1, unitPrice: 1.50}]
}

const updateQuantity = (items, id, quantity)  =>{
    return items.map((item) => {
        if(id === -1){
            item.quantity = 0;
            return item;
        }else if(item.id === id){
            item.quantity = quantity;
            return item;
        }else{
            return item;
        }
    })
}

const removeItem = (items, id)  =>{
    return items.filter((item) => {
        return id !== item.id
    })
}

export function reducers ( state=initialState, action ){
    switch(action.type){
        case 'GET_ITEMS':
            return { items: state.items };
        case 'QUANTITY_CHANGED':
            return { items: updateQuantity(state.items, action.payload.id, action.payload.quantity) };
        case 'CLEAR_ALL':
            return { items: updateQuantity(state.items, -1, 0) };
        case 'REMOVE_ITEM':
            return { items: removeItem(state.items, action.payload) };
        default:
            return state;
    }
}