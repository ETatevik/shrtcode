import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shrtcodeSlice from "../features/shrtCode/shrtcodeSlice"

const store = configureStore({
    reducer: {
        shrtcode: shrtcodeSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
setupListeners(store.dispatch);
export default store;