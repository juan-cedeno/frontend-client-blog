import React from 'react'
import noImage from '../assets/noimage.jpg'
import i18njs from 'i18n-js'
import Fade from 'react-reveal/Fade';

export const CourseList = ({courses}) => {

    const {difficulty , image , link , name , price} = courses

    return (
        <>
            <Fade>
            <div className = 'course'>
                
                <div className = 'cont-img-course'>
                    <img src = {image ? image : noImage} alt = {name}/>
                </div>
                <div className = 'letter-course'>
                    <p className = 'name-course'>{name}</p>
                    <p>{i18njs.toCurrency(price)}</p>
                    <p>{difficulty}</p>
                    <a href = {link} target = '_blank' rel='noreferrer'>Visit</a>
                </div>
            </div>
            </Fade>
        </>
    )
}
