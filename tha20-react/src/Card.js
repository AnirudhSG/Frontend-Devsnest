import React from "react";

function Card({title,calorie,setList,list}) {
    function del1() {
        const  Newarr=list.filter(el => el.title !== title)
        setList(Newarr)
        console.log("deleted");
    
}
    return(
        <>
    <div className="container">
    <div className="title">{title}</div>
    <div className="calories">you have consumed {calorie}cals today</div>
    <button onClick={del1} >Delete</button>
    </div>
    </>
    );
};

export default Card;