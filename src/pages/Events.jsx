import React from 'react';
import styles from '../styles/Event.module.css';
import image1 from '../assets/techtalk.png';
import image2 from '../assets/impulse.jpg';
import image3 from '../assets/hackwithmait.jpg';

const Events = () => {
  return (
    <div className={styles.events}>
      <h1>Upcoming Events</h1>
      <p>Stay tuned for exciting events brought to you by 'IOSD MAIT'</p>

      <section className= {styles.eventContainer}>
        <img src={image1} alt="" />
        <div >
        <h2 className= {styles.eventName}>Orientation</h2>
        <p className={styles.eventDescription}>
          'Orientation' is your gateway to 'IOSD MAIT.' Learn about our society's mission, vision, and how you can get involved. Meet fellow members and discover exciting opportunities.
        </p>
        <p className={styles.eventDate}>Date: 4 Oct 2023 </p>
        <p className={styles.eventLocation}>Location: Main Auditorium, MAIT</p>
        </div>
      </section>

      <section className= {styles.eventContainer}>
        <img src={image3} alt="" />
        <div>
        <h2 className= {styles.eventName}>DevWeek</h2>
        <p className={styles.eventDescription}>
          Dive into a week of intensive tech learning during 'DevWeek.' We offer workshops, coding challenges, and hands-on experiences to enhance your skills.
        </p>
        <p className={styles.eventDate}>Date: To be Announced</p>
        <p className={styles.eventLocation}>Location: To be Announced</p>
        </div>
      </section>

      <section className= {styles.eventContainer} >
        <div>
        <h2 className= {styles.eventName}>Impulse</h2>
        <p className={styles.eventDescription}>
          Join us for 'Impulse,' our flagship event that brings together tech enthusiasts, industry experts, and students. It's a platform for learning, networking, and innovation.
        </p>
        <p className={styles.eventDate}>Date: To be Announced</p>
        <p className={styles.eventLocation}>Location: To be Announced</p>
        </div>
        <img src={image2} alt="" />
      </section>
      
    </div>
  );
};

export default Events;
