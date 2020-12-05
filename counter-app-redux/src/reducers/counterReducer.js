import ActionTypes from '../action'
const initialState = {
    count: 0
}
export default function counterReducer (
    state = initialState,
    action
)
{
switch(action.type) {
    case ActionTypes.RESET_COUNT:
return {count: state.count + 10}
case ActionTypes.DECREASE_COUNT:
    return {count: state.count - 1}
default:
    return state
 }
}
