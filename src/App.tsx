import React from 'react';
import { DataProvider } from './Context/cartContext'
import Body from './Components/Body';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './Components/ProtectedRoutes';
import { Userprovider } from './Context/userContext';
import Cart from './routes/cart';
import Signin from './routes/Signin';
import Register from './routes/Register';




function App() {

  return (
    <div className="App">
      <Userprovider>
        <DataProvider>

          <Routes>

            <Route element={<ProtectedRoutes />}>
              <Route path='/' element={<Body />} />
              <Route path='cart' element={<Cart />} />
            </Route>

            <Route path='login' element={<Signin />} />
            <Route path='register' element={<Register />} />


          </Routes>
        </DataProvider>
      </Userprovider>

    </div>
  );
}

export default App;
