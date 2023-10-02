import React from 'react';
import styles from '../styles/Sponsor.module.css';

const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
      <h1>Our Sponsors</h1>
      <p>We would like to extend our heartfelt gratitude to our generous sponsors who make our initiatives possible. Their support allows us to continue our mission of fostering innovation and tech education.
      </p>

      <section className={styles.sponsorContainer}>
        <h2 className={styles.sponsorName}>Coding Blocks</h2>
        <img src="data:image/png;base64,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" alt="coding blocks" className={styles.sponsorImage} />
        <p>
          Coding Blocks is a well-known online platform and coding bootcamp that offers a variety of courses and resources related to computer programming and software development. It was founded by Arnav Gupta, Manmohan Gupta, and Piyush Kumar in India.
        </p>
        <p>Website: <a href="https://codingblocks.com/" className={styles.sponsorLink}>Coding Blocks</a></p>
      </section>

      <section className={styles.sponsorContainer}>
        <h2 className={styles.sponsorName}>Geeks For Geeks</h2>
        <img src="data:image/jpeg;base64,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" alt="GFG" className={styles.sponsorImage} />
        <p>
          "GeeksforGeeks" (GFG) is a well-known online platform that provides a wide range of resources and content related to computer science, programming, and technology. It was founded by Sandeep Jain in 2008 and has since become a popular destination for students, developers, and tech enthusiasts to learn and enhance their skills.
        </p>
        <p>Website: <a href="https://www.geeksforgeeks.org/" className={styles.sponsorLink}>GFG</a></p>
      </section>

      <div className={styles.sponsorBox}>
            <div className={styles.title}>Sponsor IOSD MAIT</div>
             <div className={styles.text}>Join Us</div>
      </div>
    </div>
  );
};

export default Sponsor;
