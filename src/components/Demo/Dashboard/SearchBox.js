import * as React from 'react';
import {useEffect, useState} from 'react'
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import AutoFill from './Autofill'

import { stockChange } from '../../../reducers/stockReducer';


import {useDispatch} from 'react-redux'

const searchBoxStyles = { root: { 
    height: '3em',
    boxSizing: 'border-box',
    border: '2px solid #eee',
 },  };

/* eslint-disable react/jsx-no-bind */

let stocks = '';

const SearchBoxDash = () => {    
    
    
const dispatch = useDispatch()
const [newArray, setArray] = useState(null)

const handleValue = (newValue) => {  
        setArray(stocks.filter(stock =>( (stock.Ticker.toLowerCase().includes(newValue.toLowerCase()) )|| stock.Name.toLowerCase().includes(newValue.toLowerCase())  ))  )

}   

const handleEnter = (newValue) => {
    dispatch(stockChange(newValue))
    setArray('')
    
}


useEffect(() => {
  
fetch('https://safe-tundra-92322.herokuapp.com/stocks')
.then(r=> r.json())
    .then(rr=> stocks= rr)
}, []);   


        
return<div className="sbox">  

<SearchBox
  id="search"
    styles={searchBoxStyles}
    placeholder="Search"
    onEscape={ev => {
      console.log('Custom onEscape Called');
    }}
    onClear={ev => {
      console.log('Custom onClear Called');
    }}
    onChange={(_, newValue) => handleValue(newValue)}
    onSearch={(newValue) =>  handleEnter(newValue)}
  />
  <div className="autocomplete">
  <AutoFill newArray={newArray} setNewArray={setArray}/></div>
  </div>
};

export default SearchBoxDash;
