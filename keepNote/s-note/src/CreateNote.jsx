import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (note) => {
    props.passNote(note);
  };
  return (
    <>
      <div className="container">
        <div className="main_note">
          <form>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="title"
              autoComplete="off"
            />
            <textarea
              cols=""
              rows=""
              name="content"
              value={note.content}
              onChange={inputEvent}
              placeholder="Write your note..."
            ></textarea>
            <Button onClick={addEvent}>
              <AddIcon className="plus-sign" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
