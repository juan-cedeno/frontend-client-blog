import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as MenuSeg } from 'semantic-ui-react'

import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'


import '../css/menu.css'


export const Menu = () => {

    const [activeItem, setActiveitem] = useState('')

    const handleItemClick = (e , {name}) => {
        setActiveitem(name)
    }

    return (
    <div>
         <div>

            <MenuSeg pointing secondary className = 'menu'>
            <MenuSeg.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as = {Link} to = '/'
                />
            
            <MenuSeg.Item
                name='blog'
                active={activeItem === 'blog'}
                onClick={handleItemClick}
                as = {Link} to = '/blog'
                />
                <div className = 'social'>

                    <a href = 'https://github.com/juan-cedeno' target = '_blank' rel='noreferrer'>
                        <img src = {github} alt = 'github'/>
                    </a>

                    <a href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' target = '_blank' rel='noreferrer' >
                        <img src = {linkedin} alt = 'linkedin'/>
                    </a>

                </div>

            </MenuSeg>

          </div>


    </div>
    )
}
