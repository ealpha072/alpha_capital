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
							<a href=""><i class="fa-brands fa-facebook"></i></a>
						</div>
					</div>
				</div>
				<div className={styles.secondDiv}>

				</div>
				<div className={styles.thirdDiv}>

				</div>
			</footer>
		</section>
	)
}

export default Footer