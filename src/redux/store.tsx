import { configureStore } from '@reduxjs/toolkit';
import {bankApi} from './services/bankApi'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    [bankApi.reducerPath]:bankApi.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([bankApi.middleware])  
});

setupListeners(store.dispatch)

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch