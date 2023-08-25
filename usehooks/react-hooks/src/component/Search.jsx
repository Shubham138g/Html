import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={img}
          onChange={inputEvent}
        />
        <br />
        {img === "" ? null : <Sresult name={img} />}
      </div>
    </>
  );
};

export default Search;
