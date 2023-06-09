import { React, useState} from 'react';

import { useDispatch } from 'react-redux';
import { createNote } from '../features/notes/notesSlice';

import { Link } from "react-router-dom";

import '../sass/partials/new-note.scss';

export const NewNote = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("New note");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({title, content}));
  }

  return (
    <div className='new-note'>
      <form onSubmit={handleSubmit} className="inner">
        <input defaultValue={title} onChange={e => setTitle(e.target.value)} name="title" className="title"></input>

        <textarea defaultValue={content} onChange={e => setContent(e.target.value)} name="content" id="" cols="30" rows="10" placeholder='Start typing here...'></textarea>

        <div className="btns">
          <button type='submit' className="btn yellow">Save</button>
          
          <Link to={`/`} className='btn grey'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}
