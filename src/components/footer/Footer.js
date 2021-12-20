import React from 'react'
import style from './footer.module.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, AiOutlineHeart } from 'react-icons/all'

const icons = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 2, icon: <FaTwitter /> },
    { id: 3, icon: <FaInstagram /> },
    { id: 4, icon: <FaLinkedinIn /> },
]

function Footer() {
    return (
        <div className={style.footer}>
            <h2>About us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aliquid amet aliquam deleniti
                neque adipisci possimus reiciendis distinctio, <br />hic sint aut eos eaque veniam pariatur quidem
                ratione enim nesciunt accusantium at voluptatem officiis quod.
            </p>
            <div className={style.icons}>
                {icons.map((item) => (
                    <div key={item.id}>{item.icon}</div>
                ))}
            </div>
            <p>Made with<AiOutlineHeart />By Easy Tutorials</p>
        </div>
    )
}

export default Footer
