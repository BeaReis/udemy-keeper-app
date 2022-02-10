import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

/* This is a React component which contains the attributes for the 'Note'.
    - The user inputs a title and content in 'CreateArea.jsx' and 'App.jsx' maps this properties
      to the 'Note.jsx' component through the 'props' paramenter. */

function Note(props) {

// This function passes the note 'id' to the onDelete property, which is a function in 'App.jsx'.
  function handleClick() {
      props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button 
        onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
