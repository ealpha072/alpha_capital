import React from 'react'
import logo from '../Assets/logo.png'
import styles from '../Styles/Footer.module.css'

const Footer = () => {
	return (
		<section>
			<footer>
				<div className={styles.firstDiv}>
					<div className="footerLogo">
						<img src={logo} alt="" width={"60"}/>
						<p>
						DATASEAL SOFTWARE transforms how businesses work 
						and people live through the power of data. 
						We help businesses across AFRICA turn data 
						into their greatest asset.
						</p>
						<div className={styles.socials}>
							<a href=""><i class="fa fa-facebook"></i></a>
							<a href=""><i class="fa fa-instagram"></i></a>
							<a href=""><i class="fa fa-pinterest"></i></a>
							<a href=""><i class="fa fa-envelope"></i></a>
							<a href=""><i class="fa fa-twitter"></i></a>
						</div>
					</div>
				</div>

				<div className={styles.quickLinks}>  
					<h3>Quick Links</h3>
					<ul>
						<li><a href="">Home</a></li>
						<li><a href="">About Us</a></li>
						<li><a href="">Services</a></li>
					</ul>

				</div>
			</footer>
		</section>
	)
}

export default Footer