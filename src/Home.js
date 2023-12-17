import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsEye } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'
import HomeProduct from './HomeProduct'
import './Home.css'

function Home({detail, view, close, setClose, addToCart}) {
    const [homeProduct, setHomeProduct] = useState(HomeProduct);

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
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection 2023</h2>
                <Link to="/product" className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slidderImg.png' alt='Slidder Image'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src="./img/mobilePhone.png" alt="mobile"></img>
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src="./img/smartWatch.png" alt="smart watch"></img>
                </div>
                <div className='detail'>
                    <p>18 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src="./img/headPhone.png" alt="headphone"></img>
                </div>
                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
            <div className='box'>
                <div className='img_box'>
                    <img src="./img/cpuHeat.png" alt="cpu"></img>
                </div>
                <div className='detail'>
                    <p>63 products</p>
                </div>
            </div>
        </div>
    </div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck />
                </div>
                <div class='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above $1000</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar />
                </div>
                <div class='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>
                <div class='detail'>
                    <h3>Member Discount</h3>
                    <p>On every order</p>
                </div>
            </div>
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone />
                </div>
                <div class='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    <div className="product">
        <h2>Top Products</h2>
        <div className='container'>
            {
                homeProduct.map((currElem) => {
                    return (
                        <div className='box' key={currElem.id}>
                            <div className='img_box'>
                                <img src={currElem.Img} alt={currElem.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addToCart(currElem)}><AiOutlineShoppingCart /></li>
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
                    )
                })
            }
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
            <div className='detail'>
                <h4>LATEST TECHNOLOGY ADDED</h4>
                <h3>Apple iPad 10.2 9th Gen - 2021</h3>
                <p>$ 986</p>
                <Link to="/product" className='link'>Shop Now  <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slidderImg.png' alt="sliderimg"></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home