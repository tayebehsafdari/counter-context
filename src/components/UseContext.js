import React, {useContext} from "react";
import {CountContext} from "../contexts/counter-context";

function UseContext() {
    const context = useContext(CountContext);
    const {count, increment, decrement, reset, onChange} = context;
    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={reset}>Reset</span>
            <span className="input-group-text" onClick={decrement}>-</span>
            <input type="text" className="form-control" value={count} onChange={onChange}/>
            <span className="input-group-text" onClick={increment}>+</span>
        </div>
    );
}

export default UseContext;