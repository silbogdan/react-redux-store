const cartItemsReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case 'ADDTOCART': {
            const payload = {...action.payload};
            payload.count = 1;
            state = {...state};
            const foundIndex = state.list.findIndex((item) => item.id === payload.id);
            if (foundIndex !== -1) {
                payload.count = state.list[foundIndex].count + 1;
                state.list = [...state.list.slice(0, foundIndex), payload, ...state.list.slice(foundIndex + 1)];

            } else {
                state.list = [...state.list, payload];
            }
            break;
        }
        case 'REMOVEFROMCART': {
            const payload = {...action.payload};
            payload.count = 1;
            state = {...state};
            const foundIndex = state.list.findIndex((item) => item.id === payload.id);
            if (foundIndex !== -1 && state.list[foundIndex].count > 1) {
                console.log(state.list[foundIndex].count);
                payload.count = state.list[foundIndex].count - 1;
                state.list = [...state.list.slice(0, foundIndex), payload, ...state.list.slice(foundIndex + 1)];
            } else {
                state.list = state.list.filter((item) => item.id !== payload.id);
            }
            break;
        }
        default: {
            break;
        }
    }

    return state;
}

export default cartItemsReducer;