import React,{useState} from 'react';
import {api_auestion} from './api';
import "./accordian.css";
import MyAccordian from './MyAccordian';

export default function Accordian() {
     const [data, setData] = useState(api_auestion);
  return (
    <>
    {data.map((currElem)=>{
        const {id,question,answer}=currElem;
        return <MyAccordian  currElem={id} {...currElem}/>
    })}
    </>
  );
}
