import React from 'react';

import {useDispatch} from 'react-redux'

import { stockChange } from '../../../reducers/stockReducer';

const AutoFill = ({setNewArray, newArray}) => {
    
const dispatch = useDispatch()
 const handleClick = (e) => {
     if(e.target.getAttribute('a1e') !== null )
    {dispatch(stockChange(e.target.getAttribute('a1e')))
    setNewArray('')}
}

    
    if(newArray===null || newArray.length === 0 || newArray.length > 3000)
        return <div></div>
    else 
        return <div classname="autocomplete">
            <ul>
                {newArray.slice(0,10)
                .map(c=> <li onClick={handleClick} a1e={c.Ticker} key={c.Ticker}>
                    <strong>{c.Ticker}</strong> - {c.Name}</li>)}</ul></div>

}
  
export default AutoFill;