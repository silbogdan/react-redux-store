import { Button, List, ListItem, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions';

const Cart = () => {

    const cartItems = useSelector((state) => {
        return state.cartItems.list;
    });

    const dispatch = useDispatch();

    return (
        <div style={{ margin: '10px' }}>
            <List>
                { cartItems.length > 0 ? cartItems.map((item, index) => (
                    <ListItem key={item.DeleteIcon}>
                        {item.count} x {item.itemName} {item.price}RON 
                        <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => dispatch(removeFromCart(item))}
                        >
                            <DeleteIcon />
                        </Button>
                    </ListItem>
                )) : 'Empty cart' }
            </List>
            <Typography>
                Total: {cartItems.reduce((sum, {price, count}) => {
                    return sum + price * count;
                }, 0)}RON
            </Typography>
            <Button fullWidth={true} variant="contained" color="primary">BUY</Button>
        </div>
    );
}

export default Cart;