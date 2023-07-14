import React from 'react'
import styles from '../Styles/Home.module.css'
import parttwoStyles from '../Styles/Parttwo.module.css'
import bannerTwo from '../Assets/banner_two.jpg'
import bannerThree from '../Assets/banner_three.jpg'

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

        </div>
  )
}

export default Home