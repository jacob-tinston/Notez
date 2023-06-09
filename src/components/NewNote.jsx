import React from 'react';
import { Link } from "react-router-dom";
import '../sass/partials/new-note.scss';

export const NewNote = () => {
  return (
    <div className='new-note'>
      <form className="inner">
        <input name="title" className="title" defaultValue='New note'></input>

        <textarea name="content" id="" cols="30" rows="10" placeholder='Start typing here...'></textarea>

        <div className="btns">
          <button className="btn yellow">Save</button>
          
          <Link to={`/`} className='btn grey'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}
