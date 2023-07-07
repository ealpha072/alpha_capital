import React from 'react'
import logo from '../Assets/logo.png'
import styles from '../Styles/Header.module.css'
//import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <nav >
            <div>
                <div className={styles.logo}>
                    <img src={logo} alt="" width={"70"}/>
                </div>
                <div className={styles.actions}>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="">SERVICES</a>
                    <a href="">CONTACT US</a>
                </div>
                <div className={styles.academy}>
                    <a href="">ACADEMY</a>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header