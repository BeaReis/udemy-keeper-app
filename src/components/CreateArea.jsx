import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

/* This React component is responsible for the 'Create Note Area'. */

function CreateArea(props) {

  /* These variables get and set the input area state. The input is initially a 1 row text area
     and when clicked, expands its layout to two fields of input and a button. */
  const [isExpanded, setIsExpanded] = useState(false);

  /* These variables get and set the Notes title and content */
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  /* 'handleChange' receives 'event'(whenever input state changes) and gets the 'name' and 'value' of the input whenever there is
      a change. */
  function handleChange(event) {
    const { name, value } = event.target;

    /* 'setNote' will take the previous input and update its value until the user submits the note. */
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  /* 'submitNote' receives 'event' (whenever add button(Fab) is clicked) and passes 'note' to the components 'onAdd' 
     property, which calls a function that adds a new 'Note' component to the screen. */
  function submitNote(event) {
    props.onAdd(note);
    setNote({
        title: "", 
        content: ""
    });
    event.preventDefault();
  }

  /* This function changes the 'isExpanded' state to true if text area rows = 1 when the user clicks it.*/ 
  function expand() {
      setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
          autoComplete="off"
        />}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          placeholder="Take a note..."
          value={note.content}
          autoComplete="off"
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
