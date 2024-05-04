import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
        
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = [...state.items, action.payload];
            })
            .addCase(addContact.rejected, handleRejected)

            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    (item) => item.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE;
            });
    },
});

export default contactsSlice.reducer;