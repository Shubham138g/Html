import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((preValue) => {
      return {
        ...preValue,
        [name]:value,
      };
    });
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
            <Button>
              <AddIcon className="plus-sign" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
