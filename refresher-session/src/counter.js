import './counter.css'
import {useState} from 'react'; // imported useState for the shorthand function

function Counter(){ //made function for counting.
    const [count, setCount] = useState(0); //splitting values
    
    return ( //will return this info on the react app
        <>
        <div class = "layout">
            <button onClick = {() => setCount(count+1)} className = "button">CLICK ME</button>
            <p className = "count">{count}</p> {/*interpolating the variable*/}
        </div>
        </>
    );
}

export default Counter //should print on App.js