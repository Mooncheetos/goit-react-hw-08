import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.number.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
