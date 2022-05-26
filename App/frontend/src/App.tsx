import React from 'react';
import './App.css';

import MyTable from './component/MyTable';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import AddStation from './component/AddStation';

function App () {
  return (
    <div className="App">
        <BrowserRouter>
            <Button variant={'contained'} className={'firstButton'}>
                <Link to={'/stations'} className={'listAllStations'}>Stations</Link>
            </Button>
            <Button variant={'contained'}>
                <Link to={'/addNewStation'}>Add New Station</Link>
            </Button>
            <Button variant={'contained'}>
                <Link to={'/'} >Home</Link>
            </Button>
            <Routes>
                <Route path={'/stations'} element={<MyTable/>}/>
                <Route path={'/addNewStation'} element={<AddStation/>}/>
            </Routes>
        </BrowserRouter>
    </div>

  );
}

export default App;
