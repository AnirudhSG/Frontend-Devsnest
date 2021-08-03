const Box=(props)=>{
    const {setdata,title,calorie,data}=props
    function delbtn() {
        const newlist=data

    }
    return (
        <>
    <div>
        {title}
    </div>
    <div>You have consumed {calorie} calorie</div>
    <button className="del" onClick={delbtn}>Delete</button>
    <button className="edit" onClick={()=>{}}>Edit</button>
    
    </>)
}
export default Box;