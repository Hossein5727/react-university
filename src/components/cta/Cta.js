import React from 'react'
import { Link } from 'react-router-dom'
import style from './cta.module.css'

function Cta() {
    return (
        <section className={style.cta}>
            <h1>Enroll for all varions online courses <br />anywhare from The Worlds!</h1>
            <Link to="/" className={style.heroBtn}>CONTACT US</Link>
        </section>
    )
}

export default Cta
