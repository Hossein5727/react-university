import React, { useEffect, useState } from 'react'
import style from './testimonials.module.css'
import img1 from '../../assets/images/user1.jpg'
import img2 from '../../assets/images/user2.jpg'
import { AiOutlineStar } from 'react-icons/ai'

const testimonialsData = [
    { id: 1, star: 5, title: 'Christen Berkley', img: img1, caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem nemo minima delectus quod culpa eveniet blanditiis iusto nesciunt? Omnis quidem necessitatibus aliquam vitae ducimus iste?' },
    { id: 2, star: 4, title: 'Divid Byer', img: img2, caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem nemo minima delectus quod culpa eveniet blanditiis iusto nesciunt? Omnis quidem necessitatibus aliquam vitae ducimus iste?' },
]

function Testimonials() {
    return (
        <section className={style.testimonials}>
            <h1>What Our Student Says</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, voluptate?
            </p>

            <div className={style.row}>
                {testimonialsData.map((item) => (
                    <div key={item.id} className={style.testimonialsCol}>
                        <img
                            src={item.img}
                            alt={item.title}
                        />
                        <div>
                            <p>{item.caption}</p>
                            <h3>{item.title}</h3>
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Testimonials
