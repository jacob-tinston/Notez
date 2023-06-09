import { React } from "react";

import Notes from "../components/Notes";
import { NewNote as NewNoteComponent } from "../components/NewNote";

const NewNote = (props) => {  
  return (
    <>
        <div className="container">
          <Notes />
          <NewNoteComponent />
        </div>
    </>
  )
};

export default NewNote;
