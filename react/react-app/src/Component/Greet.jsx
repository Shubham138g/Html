import React from "react";

export default function Greet() {
  let currentDate = new Date(2023, 8, 11, 11);
  currentDate = currentDate.getHours();

  let greet = "";

  const cssStyle = {};

  if (currentDate > 1 && currentDate < 12) {
    greet = "Good Morning";
    cssStyle.color = "yellow";
  } else if (currentDate > 12 && currentDate < 19) {
    greet = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (currentDate > 19 && currentDate < 24) {
    greet = "Good night";
    cssStyle.color = "red";
  }
  return (
    <>
      <h1 className="h1">
        {" "}
        Hello sir,<span style={cssStyle}>{greet}</span>
      </h1>
    </>
  );
}
