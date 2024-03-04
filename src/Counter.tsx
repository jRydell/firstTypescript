import React, { useState } from 'react'

function Counter() {
    // const x = 12; ingen type declaration, utan infered type
    const [newCount, setNewCount] = useState(0);
    const [count, setCount] = useState(0);


    const handleAddClick = () => setCount(count + 1);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewCount(Number(e.target.value));
    };
    const handleClickChange = () => {
        setCount(newCount);
    };




return (
    <div>
        <input type="number" value={newCount} onChange={handleChange} />
        <button onClick={handleClickChange}>Change</button>
        <p>{count}</p>
        <button onClick={handleAddClick}>Add</button>
        <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
);
}


export default Counter;


