# React-Redux Shopping Cart
A small application created in order to learn React-Redux fundamentals.
It contains a hard-coded list of items that can be added to the shopping cart.
The UI was created using Material-UI.

## How does it work?
A reducer was created for the shopping cart, in order to issue `ADDTOCART` and `REMOVEFROMCART` actions. This reducer is called in the global store.
In order to be used, the state can be accessed using `useSelector` hook.

## Set-up
1) `cd` into project folder
2) Run `npm install` and then `npm start`

## Dependencies
- Node v16.6.2
- npm v7.20.3
- React v17.0.2
