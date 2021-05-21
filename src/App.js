import React,{ createContext, useContext, useState } from "react";
import "./styles.css";

const CounterContext = createContext([0, () => {}]);

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={[count, setCount]}>  
    {/* <CounterContext.Provider value={{count:5, setCount}}> */}
      <div className="App">
        <Comp1/>
      </div>
    </CounterContext.Provider>
  );
}

const Comp1 = () => {
  return(
    <>
      <div>Comp1</div>
      <Comp2/>
    </>
  )
}
const Comp2 = () => {
  return(
    <>
      <div>Comp2</div>
      <Comp3/>
    </>
  )
}
const Comp3 = () => {
  return(
    <>
      <div>Comp3</div>
      <Comp4/>
    </>
  )
}
// const Comp4 = () => {
// const [count, setCount] = useContext(CounterContext);
//   return(
//     <>
//       <div>Comp4</div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count+1)}>increseCount</button>
//       <button onClick={() => setCount(count-1)}>decreaseCount</button>
//     </>
//   )
// }

class Comp4 extends React.Component{
  render(){
    return(
      <CounterContext.Consumer>
        {([count, setCount]) => {
          return(
            <>
              <div>Comp4</div>
              <div>{count}</div>
              <button onClick={() => setCount(count+1)}>increseCount</button>
              <button onClick={() => setCount(count-1)}>decreaseCount</button>
             </>
          )
        }}
      </CounterContext.Consumer>
    )
  }
}
