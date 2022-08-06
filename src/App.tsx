import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {DataProvider} from './context'
function App() {
  return (
    <div className="App">
  <DataProvider>
 <Header/>
 <Body/>
 <Footer/>
 </DataProvider>
    </div>
  );
}

export default App;
