import React from 'react'
import Hero from '../components/Hero'
import classes from '../styles/Home.module.css';
import Desc from '../components/Desc';
import UpcomingEvents from '../components/UpcomingEvents';
import EventCarousal from '../components/EventCorousal';



const Home = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <Desc />
      <UpcomingEvents />
    </div>
  )
}

export default Home