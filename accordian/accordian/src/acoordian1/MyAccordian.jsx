import React ,{useState}from 'react';

export default function MyAccordian({question,answer}) {
   const [ans, setAns] = useState(false);
  return (
    <>
    <div className="main-heading">
      <p onClick={()=> setAns(!ans)}> { ans ? "➖":"➕"}</p>
      <h1>{question}</h1>
      </div>
      {
      ans && <p className='answer'> {answer}</p>
      }

      
    </>
  );
}
