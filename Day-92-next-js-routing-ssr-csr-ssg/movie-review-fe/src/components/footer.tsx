import React from "react";
import styles from '@/styles/footer.module.css'

export default function Footertsx() {
  return (
    <div>
      <div className={styles.footer}>
        <div>
            <h3>Help</h3>
            <h3>About Rotten Tomatoes</h3>
            <h3>What's the Tomatometer®?</h3>
        </div>
        <div>
            <h3>Critic Submission</h3>
            <h3>Licensing</h3>
            <h3>Advertise With Us</h3>
            <h3>Careers</h3>
        </div>
        <div>
            <h1>JOIN THE NEWSLETTER</h1>
            <h3>Get the freshest reviews, news, and more delivered right to your inbox!</h3>
            <button>JOIN THE NEWSLETTER</button>
        </div>
        <div>
            <h1>FOLLOW US</h1>
        </div>
    </div>
  </div>
  )
}
