import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './component/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mens from "./pages/Mens"
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart"
import HomeLiving from "./pages/HomeLiving";
import Product from "./component/Product"
import { Provider } from 'react-redux';
import Appstore from './store/Appstore';
import SearchTerm from './component/SearchTerm';
import { useEffect, useState } from 'react';
import { brand } from './util/Hero';
function App() {
const [data,setData]=useState([...brand])
 
  return (
    <>
    
    <Provider store={Appstore}>
    <BrowserRouter>
    <Navbars/>
    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/men' element={<Mens/>}/>
  <Route path='/women' element={<Women/>}/>
  <Route path='/kids' element={<Kids/>}/>
  <Route path='/homeliving' element={<HomeLiving/>}/>
  <Route path='/cart' element={<Cart/>}/>
<Route path='/product/:pro' element={<Product  />}/>
<Route path='/search/:term' element={<SearchTerm/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
