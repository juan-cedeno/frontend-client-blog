import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { CourseList } from './CourseList'

import '../css/course.css'
import { StoreContext } from '../context/StoreContext'
import { Loading } from './Loading'

const URL = process.env.REACT_APP_URL_API

export const Course = () => {

    const [course, setCourse] = useState([])
    const {loading  , setLoading} = useContext(StoreContext)

    
    useEffect(() => {
        
        const getCourse = async () => {
            setLoading(true)
            try {
                const {data} = await Axios.get(`${URL}/course`)
                setCourse(data.course)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
            }
        }
        
        getCourse()

    }, [setLoading])
    
    if (loading) {
        return <Loading/>
    }

    return (
        <>
            
            <div className = 'cont-course'>

              <h2 className = 'title'>Learn and improve your skills</h2>

                {
                    course.map( courses => (
                       <CourseList courses = {courses} key = {courses._id}/>
                    ))
                }

            </div>
        </>
    )
}
