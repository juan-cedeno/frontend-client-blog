import React, { useState } from 'react'
import newsletter from '../assets/suscription.png'
import Axios from 'axios'

import '../css/newsletter.css'
import { notificationMessage } from '../helpers/notification-message'

const URL = process.env.REACT_APP_URL_API

export const Newsletter = () => {

    const [inputValue, setInputValue] = useState({
        email : ''
    })

    const {email} = inputValue

    const handlenChangeNewLetter = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]:e.target.value
        })
    }

    const hanlenClick = async (e) => {
        e.preventDefault()

        try {
            const {data} = await Axios.post(`${URL}/new-letters` ,{email})
           
            if (data.ok) {
                notificationMessage('Success' , 'Congratulations now you are subscribed to the offers' , 'success')
            }else {
                notificationMessage('Error' , data.message , 'danger') 
            }

        } catch (error) {
            console.log(error);
        }

        setInputValue({
            email : ''
        })
    }

    return (
        <div className = 'cont-newsletter'>
            <div>
                <img src = {newsletter} alt = 'newsletter'/>
            </div>
            <div className = 'cont-form'>

                <h3>Subscribe to receive our offers</h3>

                <form className = 'form' onSubmit = {hanlenClick}>
                    <input
                    type = 'email'
                    placeholder = 'Email'
                    name = 'email'
                    value = {email}
                    autoComplete = 'off'
                    onChange = {handlenChangeNewLetter}
                    />
                    <button>Send</button>
                </form>

            </div>
        </div>
    )
}
