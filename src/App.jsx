import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Homepage from './pages/homepage/homepage.component';

// Components
import NavBar from './components/navbar/navbar.component';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact='true' path='/' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
