import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const CreateNote = () => {
  return (
    <>
      <div className="container">
        <div className="main_note">
          <form>
            <input type="text" placeholder="title" autoComplete="off" />
            <textarea
              cols=""
              rows=""
              placeholder="Write your note..."
            ></textarea>
            <Button >
              <AddIcon className="plus-sign"/>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNote;
