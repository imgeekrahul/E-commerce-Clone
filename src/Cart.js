import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({cart, setCart}) => {

    // increase qty
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((currElem) => {
            return currElem.id === product.id ? {...exist, qty: exist.qty + 1} : currElem
        })) 
    }

    // decrease qty
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((currElem) => {
            return currElem.id === product.id ? {...exist, qty: exist.qty - 1} : currElem
        })) 
    }

    // remove cart product
    const removeProduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        console.log("Exist data: ", exist);
        if(exist.qty > 0) {
            const emptyData = cart.filter((x) => {
                return x.id !== product.id
            })
            setCart(emptyData)
        }
    }

    // Total Price
    const TotalPrice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  return (
    <>
    <div className='cartcontainer'>
        { cart.length == 0 && 
        <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to="/product" className='emptycartbtn'>Shop Now</Link>
        </div>
        }
        <div className='contant'>
            {
                cart.map((currElem) => {
                    return (
                        <div className='cart_item' key={currElem.id}>
                            <div className='img_box'>
                                <img src={currElem.Img} alt={currElem.Title} ></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{currElem.Cat}</h4>
                                    <h3>{currElem.Title}</h3>
                                    <p>Price: ${currElem.Price}</p>
                                    <div className='qty'>
                                        <button className='incqty' onClick={() => incqty(currElem)}>+</button>
                                        <input type="text" value={currElem.qty}></input>
                                        <button className='decqty' onClick={() => decqty(currElem)}>-</button>
                                    </div>
                                <h4 className='subtotal'>sub total: ${currElem.Price * currElem.qty}</h4> 
                                </div>
                                <div className='close'>
                                    <button onClick={() => removeProduct(currElem)}><AiOutlineClose /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {
            cart.length > 0 &&
            <>
                <h2 className='totalPrice'>total: $ {TotalPrice}</h2>
                <button className='checkout'>checkout</button>
            </>
        }
        
    </div>
    </>
  )
}

export default Cart