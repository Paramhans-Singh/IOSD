import React from 'react';
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.mission}>
        <h2>Mission</h2>
        <p>At IOSD MAIT, our mission is to foster a vibrant and innovative tech community within our institution. We are committed to:</p>
        <ul>
          <li>Empowering students with cutting-edge technology skills and knowledge, enabling them to excel in the ever-evolving tech industry.</li>
          <li>Facilitating collaboration and networking opportunities among tech enthusiasts, fostering a culture of learning and creativity.</li>
          <li>Providing high-quality educational resources, workshops, and events to ensure that our members stay at the forefront of technological advancements.</li>
          <li>Encouraging our members to leverage technology for positive social impact by engaging in meaningful projects and initiatives.</li>
          <li>Promoting diversity and inclusion within the tech community, ensuring that everyone, regardless of background, feels welcome and valued.</li>
          <li>Supporting the professional development of our members by connecting them with industry professionals and offering career-oriented guidance.</li>
          <li>Inspiring and supporting innovative thinking and entrepreneurship, nurturing the next generation of tech leaders.</li>
        </ul>
      </section>

      <section className={styles.vision}>
        <h2>Vision</h2>
        <p>"Our vision for IOSD MAIT is to become a leading tech society recognized not only within our institution but also on a broader scale. We envision:</p>
        <ul>
          <li>
            <strong>
              A Thriving Tech Ecosystem:
            </strong>
            A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.
          </li>
          <li>
            <strong>
              Global Impact:
            </strong>
            To make a global impact by producing tech leaders, innovators, and problem solvers who address some of society's most pressing challenges.
          </li>
          <li>
            <strong>
              Industry Partnership:
            </strong>
            Strong partnerships with industry leaders, enabling our members to access real-world experiences, internships, and job opportunities.
          </li>
          <li>
            <strong>
              Tech for Good:
            </strong>
            A tech community known for its commitment to using technology for the betterment of society, contributing to social and environmental causes.
          </li>
          <li>
            <strong>
              Inclusivity:
            </strong>
            A diverse and inclusive community that celebrates differences and encourages the participation of individuals from all backgrounds.
          </li>
          <li>
            <strong>
              Excellence in Tech Education:
            </strong>
            To be known for our excellence in tech education, producing graduates who are not only skilled but also ethical and socially responsible.
          </li>
          <li>
            <strong>
              A Hub for Innovation:
            </strong>
            To be a hub for innovation, startups, and entrepreneurial ventures, fostering a culture of creativity and problem-solving.
          </li>
        </ul>
      </section>

      <section className={styles.goals}>
        <h2>Goals</h2>
       <ul>
          <li>
            <strong>
                Skill Development:
            </strong>
            To equip our members with the skills and knowledge required to succeed in the tech industry.
          </li>
          <li>
            <strong>
                Community Building:
            </strong>
            To foster a vibrant and inclusive tech community within our institution.
          </li>
          <li>
            <strong>
                Innovation and Entrepreneurship:
            </strong>
            To encourage innovation and entrepreneurship among our members.
          </li>
          <li>
            <strong>
                Tech for Good:
            </strong>
            To leverage technology for positive social impact.
          </li>
          <li>
            <strong>
                Diversity and Inclusion:
            </strong>
            To promote diversity and inclusion in tech.
          </li>
          <li>
            <strong>
                Professional Development:
            </strong>
            To support the professional development of our members.
          </li>
        </ul>
      </section>


      <section className={styles.faq}>
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3> Who can join "IOSD MAIT"? </h3>
          <p> Membership is open to all students at MAIT. We welcome anyone with an interest in technology and a passion for learning. </p>
          
          <h3> How do I become a member? </h3>
          <p> You can become a member by signing up on our website or attending one of our introductory meetings. Membership involves a nominal fee. </p>
          
          <h3> What benefits do members receive? </h3>
          <p> Members gain access to exclusive workshops, events, and resources. They can also network with fellow tech enthusiasts and industry professionals. </p>
          
          <h3> How can I get involved in projects and hackathons? </h3>
          <p> We regularly announce project opportunities and hackathons. Members can participate by expressing their interest and collaborating with project teams. </p>
          
          <h3> How can I stay updated with "IOSD MAIT" activities? </h3>
          <p> You can stay informed by following our website, social media channels, and joining our mailing list. We also announce events during our meetings. </p>
          
          </div>
          </section>
    </div>
  );
};

export default About;
