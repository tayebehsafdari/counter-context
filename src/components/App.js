import './App.scss';
import {Container, Form} from 'react-bootstrap';
import {CountContext} from "../contexts/counter-context";
import ContextType from "./ContextType";
import UseContext from "./UseContext";
import {useState} from "react";

function App() {
    const initialCount = 0;
    
    const increment = () => setState(state => ({...state, count: state.count + 1}));
    const decrement = () => setState(state => ({...state, count: state.count - 1}));
    const reset = () => setState(state => ({...state, count: initialCount}));
    const onChange = (e) => setState(state => ({...state, count: e.target.value}));

    const [state, setState] = useState({
        count: initialCount,
        increment,
        decrement,
        reset,
        onChange
    });
    return (
        <div className="App">
            <Container>
                <Form>
                    <CountContext.Provider value={state}>
                        <ContextType/>
                        <UseContext/>
                    </CountContext.Provider>
                </Form>
            </Container>
        </div>
    );
}

export default App;
