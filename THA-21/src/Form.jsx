import React,{useState} from 'react'
import Box from './Box';
 const Form = () => {
    const [value,setValue]= useState();
    const [number,setNumber]= useState();
    const [data, setdata] = useState([])
    const submit = (e) =>{
        
        setdata([...data,{food:value,calorie:number}])
        e.preventDefault();
        console.log("submited");
        setValue("")
        setNumber(0)
    }
    return (
        <>
        <div className="inputboxes">
            <form onSubmit={submit}>
                <label>
                    <input required type="text" className="text"  onChange={(e)=>{setValue(e.target.value)} } value={value}></input>
                </label>
                <label>
                    <input required  type="number" className="number" onChange={(e)=>{setNumber(e.target.value)}} value={number}></input>
                </label>
                <label>
                <input type="submit"  ></input>             
                  </label>
                </form>
        </div>
        <div className="list">
        {data.map((item,index)=>(<Box setdata={setdata} key={index} title={item.food} data={data} calorie={item.calorie} />)) }
        </div>
        </>
        
    )

    
}

export default Form
