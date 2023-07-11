import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ContactType {
  HOME = "Home",
  OFFICE = "Office",
}

export interface IContact {
  id: number;
  name: string;
  phone: string;
  address: string;
  imageUrl: string;
  type: ContactType;
}

export interface ContactState {
  contact: Array<IContact>;
}
const initialState: ContactState = {
  contact: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addedContact: (state, action: PayloadAction<IContact>) => {
      state.contact = [...state.contact, action.payload];
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contact = state.contact.filter((e) => e.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<IContact>) => {
      const index = state.contact.findIndex((e) => e.id === action.payload.id);
      state.contact[index] = action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;
