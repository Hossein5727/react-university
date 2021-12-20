import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/logo.png'
import style from './header.module.css'
import { FaBars, FaWindowClose } from 'react-icons/fa'

const navItems = [
    { id: 1, text: "HOME", to: "/" },
    { id: 2, text: "ABOUT", to: "/about" },
    { id: 3, text: "COURSE", to: "/course" },
    { id: 4, text: "BLOG", to: "/blog" },
    { id: 5, text: "CONTACT", to: "/contact" },
]

function Header() {

    const [isExpand, setIsExpand] = useState(false)

    return (
        <header className={style.header}>
            <nav>
                <Link to="/"><img src={img1} alt="logo" /></Link>

                {isExpand ?
                    <FaWindowClose className={style.faIcon} onClick={() => setIsExpand(!isExpand)} />
                    :
                    <FaBars className={style.faIcon} onClick={() => setIsExpand(!isExpand)} />
                }
                <div className={isExpand ? `${style.navLinks} ${style.navLinksResonsive}` : style.navLinks}>
                    <ul>
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.to}
                                className={style.link}
                                onClick={() => setIsExpand(false)}
                            ><li>{item.text}</li></Link>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className={style.textBox}>
                <h1>World`s Biggest university</h1>
                <p>
                    Makinkg Website is now one of the easing thing in the world.You just need to learning Html,Css,<br />Javascript and you are good to go.
                </p>
                <Link to="/" className={style.heroBtn}>Visit Us to know More</Link>
            </div>

        </header>
    )
}

export default Header
