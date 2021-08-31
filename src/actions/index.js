export const addItem = (item) => {
    return {
        type: 'ADDITEM',
        payload: item
    };
};

export const removeItem = (index) => {
    return {
        type: 'REMOVEITEM',
        payload: index
    };
};

export const addToCart = (item) => {
    return {
        type: 'ADDTOCART',
        payload: item
    };
};

export const removeFromCart = (index) => {
    return {
        type: 'REMOVEFROMCART',
        payload: index
    };
};