import React from "react";
function Card(props) {
    return(
        <>
    <div className="container"></div>
    <div className="title">{props.title}</div>
    <div className="calories">you have consumed {props.calorie}cals today</div>
    </>
    );
};

export default Card;