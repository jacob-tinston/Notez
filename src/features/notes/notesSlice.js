import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
    // localStorage.removeItem("notes")
    const initial = JSON.stringify([
        {
          id: 1,
          title: 'Shopping List',
          content: 'Test',
          date: 'Fri 14th April 2023'
        }
    ]);

    if (! localStorage.getItem("notes")) {
        localStorage.setItem("notes", initial);
        localStorage.getItem("notes");
    }

    return JSON.parse(localStorage.getItem("notes"));
}

export const notesSlice = createSlice({
    name: 'notes',

    initialState: {
        value: getInitialState(),
    },

    reducers: {
        createNote: (state) => {
        state.value = [
            ...state.value,
            {
                id: 1,
                title: 'Shopping List',
                content: 'Test',
                date: 'Fri 14th April 2023'
            }
        ]

        localStorage.setItem("notes", JSON.stringify(state.value));
        },
    },
})

export const { createNote } = notesSlice.actions;

export default notesSlice.reducer;
