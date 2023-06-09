import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import '../sass/partials/notes.scss';

const Notes = () => {
  const notes = useSelector((state) => state.notes.queried);

  return (
    <div className='notes'>
      <p className="title">Saved notes</p>

      <div className="inner">
        {
          notes.map((note) =>
            <Link key={note.id} to={`/edit-note/${note.id}`} className='note'>
              <div className="wrapper">
                <div className="actions">
                </div>

                <p className="title">{ note.title }</p>

                <div className="content">
                  <p>{ note.content.substring(0, 50) }</p>
                </div>
              </div>

              <div className="date">{ note.date }</div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default Notes
