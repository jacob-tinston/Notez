import React from "react";

import { useLoaderData } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { findNote } from '../features/notesSlice';

import Notes from "../components/Notes";
import { EditNote as EditNoteComponent } from "../components/EditNote";

const EditNote = (props) => {
  const dispatch = useDispatch();
  const id = useLoaderData();

  dispatch(findNote({id}));

  const note = useSelector((state) => state.notes.current);
  
  return (
    <>
        <div className="container">
          <Notes />
          <EditNoteComponent note={note} />
        </div>
    </>
  )
};

export default EditNote;
