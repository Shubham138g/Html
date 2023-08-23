import React from "react";
// import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = () => {
  return (
    <>
      <div className="note">
        <h1>Title</h1>
        <br />
        <p>this is content</p>
        <Button>
          <DeleteIcon className="del-sign" />
        </Button>
      </div>
    </>
  );
};

export default Note;
