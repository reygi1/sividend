import React from 'react';
import { useSelector } from 'react-redux'

import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings';
import Account from './Account';

const DemoContainer = () => {
    const dashnav = useSelector(state=> state.dashnav)
    if(dashnav === 'settings')
        return <Settings />
    else if (dashnav === 'account')
        return <Account />
    else
        return <Dashboard />

}
  
export default DemoContainer;