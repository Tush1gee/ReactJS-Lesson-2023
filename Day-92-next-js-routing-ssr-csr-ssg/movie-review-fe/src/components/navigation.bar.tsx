import React from "react";
import styles from "@/styles/navigation.module.css"
import Navlinks from "./navlinks";

export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <img className={styles.logoIMG} src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="" />
          <div className={styles.searchINP}>
            <input className={styles.searchBar} type="text" placeholder="Search movies, TV, actors more..."/>
          </div>
          <Navlinks/>
      </div>
      <div className={styles.trendingBar}>
        <h3>TRENDINGON RT</h3>
        <a href="/thesupermario">The Super Mario Bros. Movie First Reviews</a>
        <div className={styles.icons}>
          <p>F</p>
          <p>T</p>
          <p>I</p>
          <p>P</p>
          <p>Y</p>
        </div>
      </div>
    </div>
  )
}
