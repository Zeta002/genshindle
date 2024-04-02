import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        totalTry : 5,
        try : 5,
        Winstreak : 0
        //characters :
    },
})
