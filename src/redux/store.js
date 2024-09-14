import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};


export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsConfig, contactsSlice),
        filters: filtersSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);