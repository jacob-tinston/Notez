import React from 'react';

import { useDispatch } from 'react-redux';
import { searchNotes } from '../features/notesSlice';

import { Link } from "react-router-dom";

import logo from '../logo.svg';

const Header = () => {
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(searchNotes(query))
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Notez" />
        </Link>
      </div>

      <div className="actions">
        <Link to="/new-note" className='btn'>New note</Link>

        <div className="custom-input">
          <div className="search">
            <svg width="80" height="18" viewBox="0 0 80 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.625 14.875L12.875 11.125C13.7188 9.875 14.1562 8.3125 13.9375 6.625C13.5312 3.75 11.1875 1.4375 8.34375 1.0625C4.09375 0.53125 0.5 4.125 1.03125 8.375C1.40625 11.2188 3.71875 13.5625 6.59375 13.9688C8.28125 14.1875 9.84375 13.75 11.125 12.9062L14.8438 16.6562C15.3438 17.125 16.125 17.125 16.625 16.6562C17.0938 16.1562 17.0938 15.375 16.625 14.875ZM3.46875 7.5C3.46875 5.3125 5.25 3.5 7.46875 3.5C9.65625 3.5 11.4688 5.3125 11.4688 7.5C11.4688 9.71875 9.65625 11.5 7.46875 11.5C5.25 11.5 3.46875 9.71875 3.46875 7.5Z" fill="black"/>
            </svg>
          </div>

          <input onChange={e => handleSearch(e.target.value)} type="search" placeholder='Search' />
        </div>
      </div>
    </header>
  )
}

export default Header
