import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import {
    formatDate,
    getInitialState,
} from '../../utils/helpers';

export const notesSlice = createSlice({
    name: 'notes',

    initialState: {
        value: getInitialState(),
    },

    reducers: {
        createNote: (state, action) => {
        state.value = [
            ...state.value,
            {
                id: uuidv4(),
                title: action.payload.title,
                content: action.payload.content,
                date: formatDate(new Date())
            }
        ]

        localStorage.setItem("notes", JSON.stringify(state.value));
        },
    },
})

export const { createNote } = notesSlice.actions;

export default notesSlice.reducer;
