import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "../redux/filters/slice";
import contactsReducer from "../redux/contacts/slice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
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