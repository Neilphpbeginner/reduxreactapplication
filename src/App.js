// Importing the useSelector, and useDispatch functions we will require, to select the required slices of state.
import { useSelector, useDispatch } from "react-redux";
// Importing the action creators, we implimented in our counter reducer.
import { decrement, increment, incrementByAmount } from "./store/counter";
// Importing the App.css file in order to add styling to our App component.
import "./App.css";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(0);
  // The useSelector function allows us to find the needed slices of state we require.
  // The useDispatch function will dispacth all the necessassry actions to the reducer
  // to enable us to modify the state.
  const count = useSelector((state) => state.counter.value);
  // Initaing the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(incrementByAmount(Number(userInput)));
    setUserInput(0);
  };

  return (
    <div>
      <div className="App">
        {/* Displaying the state or count variable we have initiated earlier using the useSeletor function*/}
        <h1>{count}</h1>
      </div>
      <div className="Buttons">
        {/* Now each time anyone of the bellow buttons are click on, the state will increment or decrement depening
         on which button is clicked.*/}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <form className="Form" onClick={handleSubmit}>
        <label>
          Value:
          <input
            type="text"
            name="value"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
