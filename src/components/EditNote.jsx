import { React, useEffect, useState} from 'react';

import { useDispatch } from 'react-redux';
import { editNote } from '../features/notesSlice';

import { Link } from "react-router-dom";

import '../sass/partials/new-note.scss';

export const EditNote = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  useEffect(() => {
    setTitle(props.note.title)
    setContent(props.note.content)
  }, [props.note])


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editNote({title, content}));
  }

  return (
    <div className='new-note'>
      <form onSubmit={handleSubmit} className="inner">
        <input value={title} onChange={e => setTitle(e.target.value)} name="title" className="title"></input>

        <textarea value={content} onChange={e => setContent(e.target.value)} name="content" id="" cols="30" rows="10" placeholder='Start typing here...'></textarea>

        <div className="btns">
          <button type='submit' className="btn yellow">Save</button>
          
          <Link to={`/`} className='btn grey'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}
