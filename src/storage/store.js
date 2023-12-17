import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { intouchReducer } from "./reducer";

// Redux persist config
const persistConfig = {
             key: 'intouch',
             storage: AsyncStorage,
};

// Middleware: Redux persist persisted reducer
const persistedReducer = persistReducer(persistConfig, intouchReducer);

// Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

let persister = persistStore(store);

// Export
export { store, persister };
