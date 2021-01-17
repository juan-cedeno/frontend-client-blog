import React from 'react'
import Fade from 'react-reveal/Fade';

export const BlogsList = ({blogItems}) => {
    
    const {name , author , url} = blogItems

    return (

        <>
        <Fade>
            <div className = 'blogs'>

                <a href = {url} target = '_blank' rel='noreferrer'>
                    <p className = 'name-blog'>{name}</p>
                    <p>{author}</p>
                </a>

            </div>
        </Fade>
        </>
    )
}
