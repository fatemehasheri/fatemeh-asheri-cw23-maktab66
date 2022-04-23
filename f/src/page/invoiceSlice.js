import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: [],
    reducers: {
        setInvoice: (state, action) => {
            return [... state, ...action.payload]
        },
        emptyInvoices: state => {
            return []
        } 
    },
})

export const {setInvoice, emptyInvoices} = invoiceSlice.actions
export default invoiceSlice.reducer