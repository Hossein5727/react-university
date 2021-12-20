import React from 'react'
import style from './facilities.module.css'
import img1 from '../../assets/images/library.png'
import img2 from '../../assets/images/basketball.png'
import img3 from '../../assets/images/cafeteria.png'

const facilitiesData = [
    { id: 1, title: 'World CLass Library', img: img1, caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit?' },
    { id: 2, title: 'Largest Play Ground ', img: img2, caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit?' },
    { id: 3, title: 'Tasty and Healthy Food', img: img3, caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit?' },
]


function Facilities() {
    return (
        <section className={style.facilities}>
            <h1>Our Facilities</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, voluptate?</p>

            <div className={style.row}>
                {facilitiesData.map((item) => (
                    <div key={item.id} className={style.facilitiesCol}>
                        <img
                            src={item.img}
                            alt={item.title}
                        />
                        <h3>{item.title}</h3>
                        <p>{item.caption}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Facilities
