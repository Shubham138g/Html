import React from "react";
// import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = (props) => {

  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
      <div className="containerNote">
        <div className="note">
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <Button onClick={deleteNote}>
            <DeleteIcon className="del-sign" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Note;
