import React from 'react'
import { useState } from 'react';
import './App.css';
import Card from './Card'
function App() {
  const arr1=[
    {
      title:"paneer" ,
      calorie:"200"
    },
    {
      title:"egg", calorie:"50"
    },
    {
      title:"fish", calorie:"200"
    },
    {
      title:"chicken", calorie:"250"
    },
    {
      title:"fish", calorie:"200"
    },
    {
      title:"rice", calorie:"400"
    }
  ]
const [list,setList]=useState(arr1)
  return (
    <>
    <h1>Calorie Read Only</h1>
    <div className="cont">

    {list.map((item,index)=>(

      <Card title={item.title} calorie={item.calorie} key={index} setList={setList} list={list}/>

    ))}
      </div>
      
  </>
  );
}

export default App;
