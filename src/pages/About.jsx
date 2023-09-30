import React from 'react';
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About Us</h1>

      <section className={styles.contentLeft}>
      <img src='https://media.tenor.com/flflC6GFzO8AAAAM/sultan-alrefaei-programmer.gif'/>
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
        <img src='https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966'/>
      </section>

      <section className={styles.contentLeft}>
      <img src='https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif'/>
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
        <img src='https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966'/>
      </section>
    </div>
  );
};

export default About;
