import React from "react";
import {CountContext} from "../contexts/counter-context";

class ContextType extends React.Component {
    static contextType = CountContext;

    render() {
        const {count, increment, decrement, reset, onChange} = this.context;
        return (
            <div className="input-group my-5">
                <span className="input-group-text" onClick={reset}>Reset</span>
                <span className="input-group-text" onClick={decrement}>-</span>
                <input type="text" className="form-control" value={count} onChange={onChange}/>
                <span className="input-group-text" onClick={increment}>+</span>
            </div>
        );
    }
}

export default ContextType;