import classes from './Counter.module.css';

export default function Counter() {

    function toggleCounterHandler() {

    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}
