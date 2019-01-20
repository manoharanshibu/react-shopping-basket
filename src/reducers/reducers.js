const initialState = {
    items: [
        {id: 0, name: 'Mountain Dew', quantity: 2, unitPrice: 1.80}, 
        {id: 1, name: 'Desperados', quantity: 6, unitPrice: 2.50}, 
        {id: 2, name: 'Jack Daniels', quantity: 4, unitPrice: 3.50}]
}

export function reducers ( state=initialState, action ){
    switch(action){
        case 'GET_ITEMS':
            return { items: state.items };
        default:
            return state;
    }
}