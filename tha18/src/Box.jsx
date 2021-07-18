
const Box = ({ item }) => {
    let color = null;
    color=item ? "black" : "white";
    // color = item % 2 === 0 ? "black" : "white";
    return <div className='box' style={{ backgroundColor: color }}></div>;
};
export default Box;