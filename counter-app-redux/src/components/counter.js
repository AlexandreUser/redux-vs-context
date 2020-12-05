import React, {Component,useEffect,useState} from 'react'
import {Button} from 'semantic-ui-react'
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import counterStyle from "./counter.module.css"
import {
resetCount,
decreaseCount
} from '../action/counter'
function Counter(props){
    const [pause,setPause] = useState(false)
    let myTimeout;
    const { resetCount, decreaseCount } = props
    useEffect(() => {
        if(!pause){
            if(props.count > 0){myTimeout = setTimeout(() => decreaseCount(), 1000)};

        }
    }, [props.count]);
    return(
        <div style={{display:"block"}}>
            <div className={counterStyle.counterContainer}>
                <p className={counterStyle.counterNumber}>{props.count}</p>
                {props.count === 0 && <Button className={counterStyle.resetButton} onClick={resetCount} >Reset</Button>}
                {!pause && props.count !== 0 && <Button className={counterStyle.resetButton} 
                onClick={()=>{
                    setPause(true)
                    clearTimeout(myTimeout)
                }} >Pause</Button>}
                {pause && props.count !== 0 && <Button className={counterStyle.resetButton} 
                onClick={()=>{
                    setPause(false)
                    setTimeout(() => decreaseCount(), 1000)}
                    } >Continue</Button>
                }

            </div>
             

        </div>
        )
    }

Counter.mapStateToProps = state => {
        return {
            count: state.count
        }
}
Counter.mapDispatchToProps = dispatch => {
    return bindActionCreators({
        resetCount,
        decreaseCount
    },
        dispatch
    )
    }

export default connect(
Counter.mapStateToProps,
Counter.mapDispatchToProps
)(Counter)