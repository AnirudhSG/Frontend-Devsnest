import React from 'react'
import './App.css';
import Card from './Card'
function App() {
  return (
    <>
    <h1>Calorie Read Only</h1>
    <div className="cont">
      <Card title="paneer" calorie="200"/>
      <Card title="egg" calorie="50"/>
      <Card title="chicken" calorie="300"/>
      <Card title="banana" calorie="100"/>
      <Card title="banana" calorie="100"/>
      <Card title="banana" calorie="100"/>
      <Card title="banana" calorie="100"/>
      </div>
  </>
  );
}

export default App;
