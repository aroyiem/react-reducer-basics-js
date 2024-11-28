import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter.js";

export default function Counter() {
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();

    function handleIncrement() {
        //dispatch({ type: INCREMENT });
        dispatch(counterActions.increment());
    }

    function handleIncrease() {
        //dispatch({ type: INCREASE, amount: 5 });
        dispatch(counterActions.increase(5)); // { type: 'INDENTIFIER', payload: 5}
    }

    function handleDecrement() {
        //dispatch({ type: DECREMENT });
        dispatch(counterActions.decrement());
    }

    function toggleCounterHandler() {
        //dispatch({ type: TOGGLE_COUNTER });
        dispatch(counterActions.toggleCounter());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>

                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleIncrease}>Increase by 5</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}
