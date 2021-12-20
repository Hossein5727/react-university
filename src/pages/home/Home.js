import React from 'react'
import Campus from '../../components/campus/Campus'
import Courses from '../../components/courses/Courses'
import Cta from '../../components/cta/Cta'
import Facilities from '../../components/facilities/Facilities'
import Testimonials from '../../components/testimonials/Testimonials'
import style from './home.module.css'

function Home() {
    return (
        <div className={style.home}>
            <Courses />
            <Campus />
            <Facilities />
            <Testimonials />
            <Cta />
        </div>
    )
}

export default Home
