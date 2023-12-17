import React, {useState} from 'react'
import Nav from './nav'
import {BrowserRouter} from 'react-router-dom';
import Rout from './Rout';
import Footer from './Footer';
import Productdetail from './ProductDetails';
function App() {
  
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  // Filter Product
  const [product, setProduct] = useState(Productdetail);
  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => {
      return x.Cat === product
    })
  setProduct(change);
  }

  // Product detail
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }

  // add to cart
  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id == product.id
    })
    if(exist) {
      alert("This Product is already added to cart !")
    } else {
      setCart([...cart, {...product, qty: 1}])
      alert("Product is added to cart !!")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn} />
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addToCart={addToCart} />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App