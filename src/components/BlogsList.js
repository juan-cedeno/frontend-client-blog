import React from 'react'

export const BlogsList = ({blogItems}) => {
    
    const {name , author , url} = blogItems

    return (

        <>
            <div className = 'blogs'>

                <a href = {url} target = '_blank' rel='noreferrer'>
                    <p className = 'name-blog'>{name}</p>
                    <p>{author}</p>
                </a>

            </div>
        </>
    )
}
