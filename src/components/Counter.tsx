import { useAppContext } from "../context/AppProvider";

const Counter = () => {

    const { counter, setCounter } = useAppContext();

  return (
    <>
      <button onClick={() => {setCounter(counter - 1)}}>-</button>
      <span>{counter}</span>
      <button onClick={() => {setCounter(counter + 1)}}>+</button>
    </>
  );
};

export default Counter;
