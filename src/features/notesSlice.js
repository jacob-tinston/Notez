import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import {
    formatDate,
    getInitialState,
} from '../utils/helpers';

export const notesSlice = createSlice({
    name: 'notes',

    initialState: {
        value: getInitialState(),
        queried: getInitialState(),
        current: {
            id: null,
            title: "",
            content: "",
            date: null
        },
    },

    reducers: {
        createNote: (state, action) => {
            state.queried = state.value = [
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

        editNote: (state, action) => {
            const index = state.value.findIndex(note => {
                return note.id === state.current.id;
            });

            state.value[index].title = action.payload.title;
            state.value[index].content = action.payload.content;

            state.queried = state.value;
            localStorage.setItem("notes", JSON.stringify(state.value));
        },

        findNote: (state, action) => {
            state.current = state.value.find(note => {
                return note.id === action.payload.id;
            });
        },

        searchNotes: (state, action) => {
            state.queried = state.value.filter(note => {
                const inTitle = note.title.toLowerCase().replace(/\s/g, '').includes(action.payload);
                const inContent = note.content.toLowerCase().replace(/\s/g, '').includes(action.payload);
                return inTitle || inContent;
            })
        }
    },
})

export const { createNote, editNote, findNote, searchNotes } = notesSlice.actions;

export default notesSlice.reducer;
