import React,{useState,useEffect} from "react";
import { useCounterState,useCounterActions } from "../store/context";
import counterStyle from "./counter.module.css"
import {Button} from 'semantic-ui-react'

export default function Counter() {
  const [pause,setPause] = useState(false)
  let myTimeout;
  const { counter } = useCounterState();
  const { reset,decreaseCount} = useCounterActions()
  useEffect(() => {
    if(!pause){
        if(counter > 0){myTimeout = setTimeout(() => decreaseCount(), 1000)};

    }
}, [counter]);
  return <div className="App">
        <div className={counterStyle.counterContainer}>  
          <p className={counterStyle.counterNumber}>{counter}</p>
          {counter === 0 && <Button className={counterStyle.resetButton} onClick={reset} >Reset</Button>}
                {!pause && counter !== 0 && <Button className={counterStyle.resetButton} 
                onClick={()=>{
                    setPause(true)
                    clearTimeout(myTimeout)
                }} >Pause</Button>}
                {pause && counter !== 0 && <Button className={counterStyle.resetButton} 
                onClick={()=>{
                    setPause(false)
                    setTimeout(() => decreaseCount(), 1000)}
                    } >Continue</Button>
                }

        </div>
      </div>;
}


