import Box from "./Box";

export default function Board() {
    let arr=[1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1,
            1,0,1,0,1,0,1,0,
            0,1,0,1,0,1,0,1]
    return (
        <div className='board'>
            {arr.map((item, index) => (
                <Box key={index} item={item} />
            ))}
        </div>
    );
}