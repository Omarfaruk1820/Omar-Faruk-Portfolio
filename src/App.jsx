
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
// import { path } from 'path';

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home></Home> }  path="*"  ></Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
