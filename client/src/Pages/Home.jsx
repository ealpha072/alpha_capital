import React from 'react'
import styles from '../Styles/Home.module.css'
import bannerTwo from '../Assets/banner_two.jpg'

const Home = () => {
    return (
        <div className={styles.homeDiv}>
            <div>
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
                            <div className="bannerBtns">
                                <a href=""></a>
                                <a href=""></a>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img src={bannerTwo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
  )
}

export default Home