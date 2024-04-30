import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: (getDeafaultMiddleware) => getDeafaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);