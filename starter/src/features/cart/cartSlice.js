import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems : cartItems,
    amount: 5,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [] // ta opcija spremeni samo cartItems znotraj state-a
            // return { cartItems: []} // ta opcija nastavi celoten state da je prazen
        },
        removeItem: (state, action) => {
            const itemId = action.payload // v tem primeru pošiljamo id iz CartItem komponente
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1 
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        }
    }
})

// console.log(cartSlice);
export const {clearCart, removeItem, increase, decrease} = cartSlice.actions // exportamo reducerje iz imeSlice.actions

export default cartSlice.reducer