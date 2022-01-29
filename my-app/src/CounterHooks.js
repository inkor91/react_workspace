import React, {useState} from 'react';

export const CounterHooks = () => {
    const[value,setValue] = useState(0);
    return (
    <div>
        <p>
           현재 카운터 값은 <b>{value}</b> 
           <br/>
           <button onClick={()=>setValue(value+1)}>+1</button>
           <br/>
           <button onClick={()=>setValue(value-1)}>-1</button>
        </p>
    </div>
    );
};
