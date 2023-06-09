import React from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { 
  stageDeleting,
  unstageDeleting,
} from '../features/notesSlice';

import { Link } from "react-router-dom";
import '../sass/partials/notes.scss';

const Notes = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.queried);

  const stageDelete = (id) => {
    dispatch(stageDeleting({id}));
  }

  const unstageDelete = (id) => {
    dispatch(unstageDeleting({id}));
  }

  return (
    <div className='notes'>
      <p className="title">Saved notes</p>

      <div className="inner">
        {
          notes.map((note) =>
            <div key={note.id} to={`/edit-note/${note.id}`} className={'note ' + (note.deleting ? 'active' : '')}>
              <div className="wrapper">
                <div className="actions">
                  <Link to={`/edit-note/${note.id}`}>Edit</Link>

                  <div onClick={() => stageDelete(note.id)}>X</div>
                </div>

                <p className="title">{ note.title }</p>

                <div className="content">
                  <p>{ note.content.substring(0, 50) }</p>
                </div>
              </div>

              <div className="date">{ note.date }</div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Notes
