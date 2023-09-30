import React from 'react';
import styles from "../styles/Footer.module.css"


const Footer = () => {
  return (
    <footer className= {styles.footer}>
      <div className={styles.container}>
          <div className= {styles.logo}>
            <div>IOSD-MAIT</div>
          </div>
         
        <div className= {styles.bottom}>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;