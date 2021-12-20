import React from 'react'
import style from './courses.module.css'


const courses1 = [
    { id: 1, title: 'Intermediate', caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit! Sit dicta similique corporis? Vero, nemo?' },
    { id: 2, title: 'Degree', caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit! Sit dicta similique corporis? Vero, nemo?' },
    { id: 3, title: 'Post Grauations', caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iure vero fugiat vel soluta quam consectetur natus adipisci suscipit! Sit dicta similique corporis? Vero, nemo?' },
]

function Courses() {
    return (
        <section className={style.course}>
            <h1>Courses We Offer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, voluptate?</p>

            <div className={style.row}>
                {courses1.map((item) => (
                    <div key={item.id} className={style.courseCol}>
                        <h3>{item.title}</h3>
                        <p>{item.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Courses
