import React from 'react'
import { AiOutlineCloseCircle, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import './Product.css'
import Productdetail from './ProductDetails'
import { useAuth0 } from "@auth0/auth0-react";

function Product({product, setProduct, detail, view, close, setClose, addToCart}) {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filterProduct = (productStr) => {
        const update = Productdetail.filter((x) => {
            return x.Cat === productStr;
        })
        setProduct(update);
    }

    const AllProduct = () => {
        setProduct(Productdetail);
    }
  return (
    <>
    {
        close 
        ? <div className='product_detail'>
            <div className='container'>
                <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                {
                    detail.map((currElem) => {
                        return (
                            <div className='productbox'>
                                <div className='img-box'>
                                    <img src={currElem.Img} alt={currElem.title} ></img>
                                </div>
                                <div className='detail'>
                                    <h4>{currElem.Cat}</h4>
                                    <h2>{currElem.Title}</h2>
                                    <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                    <h3>${currElem.Price}</h3>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        : null
    }
    <div className='products'>
        <h2># Products</h2>
        <p>Home . Products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={ () => AllProduct() } >All Products</li>
                        <li onClick={ () => filterProduct('Tablet') }>Tablet</li>
                        <li onClick={ () => filterProduct('Smart Watch') }>Smart Watch</li>
                        <li onClick={ () => filterProduct('Headphone') }>Headphone</li>
                        <li onClick={ () => filterProduct('Camera') }>Camera</li>
                        <li onClick={ () => filterProduct('Gaming') }>Gaming</li>
                        <li onClick={ () => filterProduct('Electronics') }>Electronics</li>
                        <li onClick={ () => filterProduct('Powerbank') }>Powerbank</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='contant'>
                    {
                        product.map((currElem) => {
                            return(
                                <>
                                <div className='box' key={currElem.id}>
                                    <div className='img_box'>
                                        <img src={currElem.Img} alt={currElem.Title}></img>
                                        <div className='icon'>
                                            {
                                                isAuthenticated 
                                                ? <li onClick={() => addToCart(currElem)}><AiOutlineShoppingCart /></li>
                                                : <li onClick={() => loginWithRedirect()}><AiOutlineShoppingCart /></li>
                                            }
                                            
                                            <li onClick={() => view(currElem)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{currElem.Cat}</p>
                                        <h3>{currElem.Title}</h3>
                                        <h4>${currElem.Price}</h4>
                                    </div>
                                </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product