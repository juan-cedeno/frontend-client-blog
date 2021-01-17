import React from 'react'
import { Banner } from '../components/Banner'
import { Course } from '../components/Course'
import { Newsletter } from '../components/Newsletter'


export const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Course/>
            <Newsletter/>
        </div>
    )
}
