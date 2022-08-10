import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';

import { DataProvider } from './context'
import Cart from './routes/cart';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
