import { Button, TableContainer, Paper, Table, TableBody, TableCell, TableRow, TableHead, Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions';

const Items = () => {
    const storeItems = useSelector((state) => {
        return state.storeItems;
    });

    const dispatch = useDispatch();

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {storeItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    <Avatar src="https://picsum.photos/400" alt="Product"></Avatar>
                                </TableCell>
                                <TableCell align="right">{item.itemName}</TableCell>
                                <TableCell align="right">
                                    <Button 
                                    variant="contained"
                                    onClick={() => dispatch(addToCart(item))}
                                    >
                                        {item.price}RON
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Items;