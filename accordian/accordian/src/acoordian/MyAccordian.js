import React from 'react';

export default function MyAccordian({question,answer}) {
  return (
    <>
      <h1>{question}</h1>
      <p>{answer}</p>
    </>
  );
}
