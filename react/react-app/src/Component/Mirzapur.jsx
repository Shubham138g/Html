import React from 'react';
import CardExample from './CardExample';
import Sdata from '../Sdata';

export default function Mirzapur() {
  return (
    <>
        <CardExample
            key={Sdata[0].id}
            imgsrc={Sdata[0].imgsrc}
            Sname={Sdata[0].Sname}
            title={Sdata[0].title}
          />
    </>
  );
}
