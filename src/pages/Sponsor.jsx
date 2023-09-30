import React from 'react';
import styles from '../styles/Sponsor.module.css';

const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
      <h1>Our Sponsors</h1>
      <p>We would like to extend our heartfelt gratitude to our generous sponsors who make our initiatives possible. Their support allows us to continue our mission of fostering innovation and tech education.</p>

      <section className= {styles.sponsorContainer}>
        <h2 className= {styles.sponsorName}>Sponsor Name 1</h2>
        <img src="sponsor-logo-1.png" alt="Sponsor 1 Logo" className={styles.sponsorImage} />
        <p>
          [Brief description of Sponsor 1 and their partnership with 'iosd mait.'] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Website: <a href="https://www.sponsor1.com" className={styles.sponsorLink}>www.sponsor1.com</a></p>
      </section>

      <section className= {styles.sponsorContainer}>
        <h2 className= {styles.sponsorName}>Sponsor Name 2</h2>
        <img src="sponsor-logo-2.png" alt="Sponsor 2 Logo" className={styles.sponsorImage}/>
        <p>
          [Brief description of Sponsor 2 and their partnership with 'iosd mait.'] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p>Website: <a href="https://www.sponsor2.com" className={styles.sponsorLink}>www.sponsor2.com</a></p>
      </section>

    </div>
  );
};

export default Sponsor;
