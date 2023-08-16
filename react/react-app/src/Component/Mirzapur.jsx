import React from 'react';
import CardExample from './CardExample';
import Sdata from '../Sdata';

export default function Mirzapur() {
  return (
    <>
      <CardExample
            key={Sdata[2].id}
            imgsrc={Sdata[2].imgsrc}
            Sname={Sdata[2].Sname}
            title={Sdata[2].title}
          />
    </>
  );
}
