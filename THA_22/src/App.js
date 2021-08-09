import { useState , useEffect } from 'react';
import './App.css';

function App() {
  const[templates,setTemplates]=useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res)=> res.json())
    .then((data)=>{
      setTemplates(data.data.memes);
    });
 }
  , []);

  return (
    <div className="App" >
      {console.log(templates)}
     { templates.map((template)=>
{return(<div key={template.id} className="template">
  <img src={template.url}></img>

</div> )

}



      )}
    </div>
  );
}

export default App;
