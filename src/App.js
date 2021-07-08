import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJoke } from "./actions";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const joke = useSelector(state => state.jokeReducer);
  console.log("app :", joke);
  console.log(joke && joke.jokes.length > 0 && joke.jokes[0].punchline);

  // const decNum = () => {
  //   if (num <= 0) {
  //     return 0;
  //   } else {
  //     return setNum(num - 1);
  //   }
  // };
  const incNum = () => {
    const number = Math.floor(Math.random() * 10);
    console.log("number", number);
    setNum(number);
  };

  useEffect(() => {
    dispatch(getJoke());
  }, []);
  return (
    <div className="joke">
      <h1>Random Jokes</h1>
      <h2>
        {joke && joke.jokes.length > 0 && joke.jokes[num].setup} <br />
        {joke && joke.jokes.length > 0 && joke.jokes[num].punchline}
      </h2>
      {/* <button onClick={decNum}>Pre</button> */}
      <button onClick={incNum}>Next...!</button>
    </div>
  );
};

export default App;
