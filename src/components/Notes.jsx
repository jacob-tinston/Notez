import { React, useState } from 'react';
import { Link } from "react-router-dom";
import '../sass/partials/notes.scss';

const Notes = () => {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? [
    {
      id: 1,
      title: 'Shopping List',
      content: 'Test',
      date: 'Fri 14th April 2023'
    }
  ]);

  return (
    <div className='notes'>
      {
        notes.map((note) =>
          <Link key={note.id} to={`/edit-note/${note.id}`} className='note'>
            <div className="actions">
            </div>

            <p className="title">{ note.title }</p>

            <div className="content">
              <p>{ note.content }</p>
            </div>

            <div className="date">{ note.date }</div>
          </Link>
        )
      }
    </div>
  )
}

export default Notes
