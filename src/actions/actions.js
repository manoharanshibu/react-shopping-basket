export const getItems = (state) => {
    return {
        type: 'GET_ITEMS',
        payload: state
    }
}

export const quantityChanged = (state) => {
    return {
        type: 'QUANTITY_CHANGED',
        payload: state
    }
}

export const clearAll = (state) => {
    return {
        type: 'CLEAR_ALL',
        payload: state
    }
}

export const removeItem = (state) => {
    return {
        type: 'REMOVE_ITEM',
        payload: state
    }
}