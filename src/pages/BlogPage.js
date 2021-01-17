import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { StoreContext } from '../context/StoreContext'
import { Loading } from '../components/Loading'
import { BlogsList } from '../components/BlogsList'

import '../css/blog.css'

const URL = process.env.REACT_APP_URL_API

export const BlogPage = () => {

    const [blogs, setBlogs] = useState([])

    const {loading , setLoading} = useContext(StoreContext)

    useEffect(() => {
        
        const getBlog = async () => {
            setLoading(true)
            try {
                const {data} = await Axios.get(`${URL}/blog`)
                setBlogs(data.blogs)
                setLoading(false)

            } catch (error) {
                setLoading(false)
            }
        }

        getBlog()

    }, [setLoading])

    if (loading) {
        return <Loading/>
    }

    return (
        <div>
            <h2 className = 'title'>Blogs</h2>
            <div className = 'cont-blog container'>
                {
                    blogs.map(blogItems => (
                        <BlogsList blogItems = {blogItems} key = {blogItems._id}/>
                    ))   
                }
            </div>

        </div>
    )
}
