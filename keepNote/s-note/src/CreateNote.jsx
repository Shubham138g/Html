import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

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

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  return (
    <>
      <div className="container">
        <div className="main_note">
          <form>
            {expand ? (
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={inputEvent}
                placeholder="title"
                autoComplete="off"
              />
            ) : null}
            <textarea
              cols=""
              rows=""
              name="content"
              value={note.content}
              onChange={inputEvent}
              placeholder="Write your note..."
              onClick={expandIt}
            ></textarea>

           { expand?
            <Button onClick={addEvent}>
              <AddIcon className="plus-sign" />
            </Button>:null}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
