import React from 'react'
import style from './campus.module.css'
import img1 from '../../assets/images/london.png'
import img2 from '../../assets/images/washington.png'
import img3 from '../../assets/images/newyork.png'

const campuses = [
    { id: 1, src: img1, title: "LONDON" },
    { id: 2, src: img3, title: "NEW YORK" },
    { id: 3, src: img2, title: "WASHINGTON" },
]

function Campus() {
    return (
        <section className={style.campus}>
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, voluptate?</p>

            <div className={style.row}>
                {campuses.map((item) => (
                    <div key={item.id} className={style.campusCol}>
                        <img
                            src={item.src}
                            alt={item.title}
                        />
                        <div className={style.layer}>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Campus
