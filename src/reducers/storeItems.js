const itemsList = [
    { id: 1, itemName: 'Bere', price: 2.30 },
    { id: 2, itemName: 'Paine', price: 1.20 },
    { id: 3, itemName: 'Cola', price: 4.29 },
    { id: 4, itemName: 'Sapun', price: 5.00 },
];

const itemsListReducer = (state = itemsList, action) => {
    switch (action.type) {
        case 'ADDITEM': {
            state = [...state, action.payload]
            break;
        }
        case 'REMOVEITEM': {
            state = state.filter((item) => item.id !== action.payload)
            break;
        }
        default: {
            break;
        }
    }

    return state;
}

export default itemsListReducer;