import React, { useState } from 'react'
import './Contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const [user, setUser] = useState({
        Name: '', Email: '', Subject: '', Message: ''
    })

    let name, value;
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }

    const sendData = async (e) => {
        e.preventDefault();
        const {Name, Email, Subject, Message} = user

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }

        const res = await fetch("https://e-commerce-e7702-default-rtdb.firebaseio.com/Message.json", options)
        if(res) {
            alert("Message Sent");
        }
        else {
            alert("An error has occurred !!")
        }

    }
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># Contact Us</h2>
            <div className='form'>
                <form method="POST">
                    <input type='text' name="Name" value={user.Name} placeholder='Enter Your Full Name' autoComplete='off' required onChange={data}></input>
                    <input type='email' name="Email" value={user.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
                    <input type='text' name="Subject" value={user.Subject} placeholder='Enter Your Subject' autoComplete='off' onChange={data}></input>
                    <textarea name="Message" value={user.Message} placeholder='Your Message' autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated 
                        ? <button type='submit' onClick={sendData}>Send</button>
                        : <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                    }
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact