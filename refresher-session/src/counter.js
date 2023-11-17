import './counter.css'
import {useState} from 'react'; // imported useState for the shorthand function

function Counter(props){ //made function for counting.
    const [count, setCount] = useState(props.startNum); //splitting values
    

    return ( //will return this info on the react app
        
        <>
        <div class = "layout">
            <button onClick = {() => {setCount(count+5)}} className = "button">
                CLICK ME
            </button>
            <p className = "count">
                {count}
            </p> {/*interpolating the variable*/}
            <button onClick = {() => {setCount(props.startNum)}}className = "button">
                RESET
            </button>
        
        </div>
        </>
    );
}

export default Counter //should print on App.js