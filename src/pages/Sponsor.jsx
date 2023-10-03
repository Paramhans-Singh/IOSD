
import React from 'react';
import styles from "../styles/Sponsor.module.css";
import sponsor1 from "../assets/images/Sponsers/5ire.png";
import sponsor2 from "../assets/images/Sponsers/unstop.svg";
import sponsor3 from "../assets/images/Sponsers/evepaper.png";
import sponsor4 from "../assets/images/Sponsers/corizo.png";
import sponsor5 from "../assets/images/Sponsers/wolfram.png";
import sponsor6 from "../assets/images/Sponsers/codingblocks.webp";
import sponsor7 from "../assets/images/Sponsers/mysphere3.webp";
import sponsor8 from "../assets/images/Sponsers/axure.svg";
import sponsor9 from "../assets/images/Sponsers/stockedge.png";


function Sponsors() {
  return (
    <section id={styles.sponsors}>
      <h2>Our Sponsors</h2>
      <div className={styles.main}>
        <div className={styles.sponsor}>
          <h3>Title Sponsor</h3>
          <img src={sponsor1} alt="Main Sponsor 1" />
          <h1>5ire</h1>
        </div>
        <div className={styles.sponsor}>
          <h3>Powered by</h3>
          <img src={sponsor2} alt="Main Sponsor 2" />
          <h1>Unstop</h1>
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.sponsor}>
          <img src={sponsor3} alt="Sponsor 2" />
          <h1>Evepaper</h1>
        </div>
        <div className={styles.sponsor}>
          <img src={sponsor4} alt="Sponsor 1" />
          <h1>Corizo</h1>
        </div>
        
        <div className={styles.sponsor}>
          <img src={sponsor7} alt="Sponsor 6" />
          <h1>My Sphere</h1>
        </div>
        <div className={styles.sponsor}>
          <img src={sponsor8} alt="Sponsor 7" />
          <h1>Axure</h1>
        </div>
        <div className={styles.sponsor}>
          <img src={sponsor9} alt="Sponsor 3" />
          <h1>Stock Edge</h1>
        </div>
        <div className={styles.sponsor}>
          <img src={sponsor5} alt="Sponsor 4" />
          <h1>Wolfram Alpha</h1>
        </div>
        <div className={styles.sponsor}>
          <img src={sponsor6} alt="Sponsor 5" />
          <h1>Coding Blocks</h1>
        </div>
      </div>
      <div>
        <a href="https://forms.gle/HqfQbkSnBgjpAvuo7" target='blank'>
          <button className={styles.sponsersBtn}>Register as a Sponsor</button>
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
