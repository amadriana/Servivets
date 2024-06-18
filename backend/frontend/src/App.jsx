import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    /* <BrowserRouter>
       <Routes>
         <Route
           path="/home"
           element={<Home />}
         ></Route>
       </Routes>
     </BrowserRouter>*/
    <Home />
  );
}

export default App;
