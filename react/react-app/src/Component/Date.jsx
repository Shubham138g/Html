import React from "react";

export default function Date() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <>
      <p className="p">{`Today's Date:${date}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
      <p className="p">{`Today's Time: ${time}`}</p>
    </>
  );
}