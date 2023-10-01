import React from 'react';
import styles from "../styles/About.module.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";


const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>

      <section className={styles.contentLeft}>
      <img src={image1}/>
      <div className={styles.mission}>     
      <h2>Mission</h2>
      <p>At IOSD MAIT, our mission is to foster a vibrant and innovative tech community within our institution. We are committed to:</p>
          <ul>
          <li>
          <strong>Empowering students</strong>
             with cutting-edge technology skills and knowledge, enabling them to excel in the ever-evolving tech industry.</li>
          <li>
            <strong>Facilitating collaboration</strong> and networking opportunities among tech enthusiasts, fostering a culture of learning and creativity.</li>
          <li>
             <strong>Providing high-quality </strong>
              educational resources, workshops, and events to ensure that our members stay at the forefront of technological advancements.</li>
          <li>
          <strong>Encouraging our members </strong>
            to leverage technology for positive social impact by engaging in meaningful projects and initiatives.</li>
          <li>
          <strong>Promoting diversity </strong>
            and inclusion within the tech community, ensuring that everyone, regardless of background, feels welcome and valued.</li>
          </ul>
      </div>
      </section>

      <section className={styles.contentRight}>
        <div className={styles.vision}>
        <h2>Vision</h2>
        <p>"Our vision for IOSD MAIT is to become a leading tech society recognized not only within our institution but also on a broader scale. We envision:</p>

       <ul>
          <li>
            <strong>
              A Thriving Tech Ecosystem:-
            </strong>
            A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.
          </li>
          <li>
            <strong>
              Global Impact:-
            </strong>
            To make a global impact by producing tech leaders, innovators, and problem solvers who address some of society's most pressing challenges.
          </li>
          <li>
            <strong>
              Industry Partnership:-
            </strong>
            Strong partnerships with industry leaders, enabling our members to access real-world experiences, internships, and job opportunities.
          </li>
        </ul>
        </div>
        <img src={image2}/>
        </section>

      <section className={styles.contentLeft}>
      <img src={image3}/> 
      <div className={styles.goals}>
        <h2>Goals</h2>
       <ul>
          <li>
            <strong>
                Skill Development:-
            </strong>
            To equip our members with the skills and knowledge required to succeed in the tech industry.
          </li>
          <li>
            <strong>
                Community Building:-
            </strong>
             To foster a vibrant and inclusive tech community within our institution.
          </li>
          <li>
            <strong>
                Innovation and Entrepreneurship:-
            </strong>
             To encourage innovation and entrepreneurship among our members.
          </li>
          <li>
            <strong>
                Industry Partnership:-
            </strong>
             To establish strong partnerships with industry leaders.
          </li>
          <li>
            <strong>
                Social Impact:-
            </strong>
             To leverage technology for positive social impact.
          </li>
          </ul>
        </div>
      </section>


    <section className={styles.contentRight}>
      <div className={styles.faq}>
        <h2>FAQ</h2>
        <div className={styles.item}>
          <h3> Who can join "IOSD MAIT"? </h3>
          <p> Membership is open to all students at MAIT. We welcome anyone with an interest in technology and a passion for learning. </p>
          
          <h3> How do I become a member? </h3>
          <p> You can become a member by signing up on our website or attending one of our introductory meetings. Membership involves a nominal fee. </p>
          
          <h3> What benefits do members receive? </h3>
          <p> Members gain access to exclusive workshops, events, and resources. They can also network with fellow tech enthusiasts and industry professionals. </p>
            
          <h3> How can I stay updated with "IOSD MAIT" activities? </h3>
          <p> You can stay informed by following our website, social media channels, and joining our mailing list. We also announce events during our meetings. </p>
          
          </div>
        </div>
        <img src={image4}/>
        </section>
    </div>
  );
};

export default About;
