import Home from './pages/Home';
import Inicio from './components/InicioSesion/inicio';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        ></Route>
        <Route
          path="/inicio"
          element={<Inicio />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
