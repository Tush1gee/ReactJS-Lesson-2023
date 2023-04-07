import React from "react";
import styles from '@/styles/footer.module.css'

export default function Footertsx() {
  return (
    <div className={styles.footerCont}>
      <div className={styles.footer}>
        <div>
            <h3>Help</h3>
            <h3>About Rotten Tomatoes</h3>
            <h3>What's the Tomatometer®?</h3>
        </div>
        <div className={styles.twoSection}>
            <h3>Critic Submission</h3>
            <h3>Licensing</h3>
            <h3>Advertise With Us</h3>
            <h3>Careers</h3>
        </div>
        <div className={styles.threeSection}>
            <h1>JOIN THE NEWSLETTER</h1>
            <h3>Get the freshest reviews, news, and more delivered right to your inbox!</h3>
            <button>JOIN THE NEWSLETTER</button>
        </div>
        <div className={styles.lastSection}>
            <h1>FOLLOW US</h1>
        </div>
    </div>
    <div className={styles.privacy}>
      <p>Privacy Policy</p>
      <p>Terms and Policies</p>
      <p>Cookie Notice</p>
      <p>California Notice</p>
      <p>Ad Choices</p>
      <p>Accessibility</p>
    </div>
    <div className={styles.copyright}>
      <p>Copyright © Fandango. All rights reserved.</p>
    </div>
  </div>
  )
}
