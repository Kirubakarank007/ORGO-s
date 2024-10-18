
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import fruits_banner from './Components/Assests/fruit_banner.png'
import vegtables_banner from './Components/Assests/vegtables_banner.png'
import more_banner from './Components/Assests/more_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/fruits' element={<ShopCategory banner={fruits_banner} category="fruits" />}></Route>
        <Route path='/vegtables' element={<ShopCategory banner={vegtables_banner} category="vegtables"/>}></Route>
        <Route path='/more' element={<ShopCategory banner={more_banner} category="more"/> }></Route>
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
