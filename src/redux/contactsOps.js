import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e58e1c5cc7f9b6273db1a7.mockapi.io"



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;

        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
)


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;

        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
)


export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;

        } catch (error) {
            thunkApi.rejectWithValue(error.message);
        }
    }
)