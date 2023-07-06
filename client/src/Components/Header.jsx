import React from 'react'
import logo from '../Assets/logo.png'
//import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <nav>
            <div>
                <div>
                    <img src={logo} alt="" width={"60"}/>
                </div>
                <div>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="">SERVICES</a>
                    <a href="">CONTACT US</a>
                    <a href="">CAREERS</a>
                </div>
                <div></div>
            </div>
        </nav>
    </header>
  )
}

export default Header