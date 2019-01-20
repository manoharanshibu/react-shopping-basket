const initialState = {
    items: [
        {name: 'item1', quantity: 10, unitPrice: 2}, 
        {name: 'item2', quantity: 20, unitPrice: 3}, 
        {name: 'item3', quantity: 30, unitPrice: 4}]
}

export function reducers ( state=initialState, action ){
    switch(action){
        case 'GET_ITEMS':
            return { items: state.items };
        default:
            return state;
    }
}