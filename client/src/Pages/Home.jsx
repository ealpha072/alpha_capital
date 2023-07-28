import React from 'react'
import styles from '../Styles/Home.module.css'
import parttwoStyles from '../Styles/Parttwo.module.css'
import partthreeStyles from '../Styles/Partthree.module.css'
import bannerTwo from '../Assets/banner_two.jpg'
import bannerThree from '../Assets/banner_three.jpg'
import services from '../Styles/Services.module.css'

const Home = () => {
    return (
        <div className={styles.homeDiv}>
            <div className='part_one'>
                <div className={styles.backgroundDiv}>
                    <div className={styles.blurOverlay}>
                        <div>
                            <h6>CREATIVE SOLUTIONS FOR EVERYONE</h6>
                            <h1>Get help with data analysis from experts. </h1>
                            <p>
                                ALPHA CAPITAL transforms how businesses work and people live 
                                through the power of data. We help businesses across AFRICA turn 
                                data into their greatest asset.
                            </p>
                            <div className={styles.bannerBtns}>
                                <a href="">EXPLORE MORE</a>
                                <a href="">GET A QUOTE</a>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={bannerTwo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={parttwoStyles.partTwoDiv}>
                <div>
                    <div>
                        <img src={bannerThree} alt="" />
                    </div>
                    <div className={parttwoStyles.homeAbout}>
                        <h6>ABOUT US </h6>
                        <h1>We do things differently... </h1>
                        <p>
                            Alpha Capital is a cutting edge IT Services Company headquartered in Nairobi, Kenya, 
                            with development centres in USA. With a proven track record of being totally client focused, 
                            DSS promises efficient, high quality, affordable, and on-time information technology services. .
                        </p>
                        <p>
                            ALPHA CAPITAL transforms how businesses work and people live through the power of data. 
                            We help businesses across AFRICA turn data into their greatest asset.
                        </p>
                    </div>
                </div>
            </div>

            <div className={partthreeStyles.partThreeDiv}>
                <div>
                    <div className={partthreeStyles.homeDiv}>
                        <h6>MAIN PRINCIPLES</h6>
                        <h1>Global Reach with Local Understanding </h1>
                        <div className={partthreeStyles.principles}>
                            <div>
                                <h6>Exceptional Client Service</h6>
                                <p>
                                    In healthy companies, changing directions or launching new projects 
                                    means combining underlying strengths and capacities with new energy 
                                    and support.
                                </p>
                            </div>
                            <div>
                                <h6>Exceptional Client Service</h6>
                            
                            </div>
                            <div>
                                <h6>Exceptional Client Service</h6>
                            
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className={services.services}>
                <div>
                    <h1>Our Services</h1>
                    <p>
                        Our design services starts and ends 
                        with a best in class experience 
                        strategy that builds brands.
                    </p>
                </div>

                <div className={services.servicesDiv}>
                    <div>
                        <i></i>
                        <h3>Financial Services</h3>
                        <p>
                            We help financial institutions, from banking and 
                            insurance to wealth and securities distribution, manage risks.
                        </p>

                    </div>
                </div>

            </div>

        </div>
  )
}

export default Home