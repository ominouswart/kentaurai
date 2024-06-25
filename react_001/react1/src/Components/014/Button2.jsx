import { useContext } from "react";
import { CounterContext } from "./Counter";

export default function Button2() {

    const {add, counter} = useContext(CounterContext);


    return (
        <div className="buttons">
            <button type="button" className="red" onClick={add}>ADD ({counter})</button>
        </div>
    );
}