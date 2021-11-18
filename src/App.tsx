import React from 'react';
import { Route, Routes } from 'react-router';
import {StartPage} from './components/pages/StartPage/StartPage';

function App() {
  return (
    <>
      <Routes>
          <Route path = "/" element={<StartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
