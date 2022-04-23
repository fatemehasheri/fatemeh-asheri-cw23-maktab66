import {configureStore} from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import invoiceReduser from './invoiceSlice'

const preLoadState = () => {
    try{
        const statee = localStorage.getItem('state')
        if (statee === null) {
            return undefined
        }
        return JSON.parse(statee)
    }
    catch{
        console.log(undefined)
    }
}

const saveState = state => {
    try {
        localStorage.setItem('state', JSON.stringify(state))
    }
    catch {
        return undefined
    }
}
export const store =configureStore({
    devTools: true,
    preloadedState: preLoadState(),
    reducer: {
        user: userReduser,
        invoice: invoiceReduser
    }
})

store.subscribe(() => {
    saveState({user: store.getState().user})
})