import { configureStore } from 'react'
import dataReducer from './features/dataSlice'
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [logger]
})