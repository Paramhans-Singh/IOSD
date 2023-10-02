import { Button, Container, Image, Text, Title } from '@mantine/core'
import React from 'react'
import EventCollage from '../assets/EventCollage.svg';
import classes from '../styles/Desc.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Desc = () => {

    const navigate = useNavigate();

    const seeMoreHandler = () => navigate('/about');

    return (
    <Container size="lg" className={classes.container}>
        <Image src={EventCollage} className={classes.image}/>
        <div className={classes.content}>
            <Title order={1} >
                Who are we?
            </Title>
            <Text className={classes.text}>
            The International Organization of Software Developers (IOSD) at the Maharaja Agrasen Institute of Technology (MAIT) is a dynamic tech community dedicated to advancing the field of software development and technology. Our mission is to empower students with cutting-edge software development skills and knowledge, foster collaboration and networking opportunities, provide high-quality educational resources, and encourage the use of technology for positive social impact. We envision IOSD MAIT as a globally recognized tech society that cultivates a thriving tech ecosystem, makes a global impact, and forms strong industry partnerships. Membership is open to all MAIT students, offering access to exclusive workshops, events, and resources while nurturing a vibrant and inclusive tech community. Stay updated with our activities through our website, social media, mailing list, and meeting announcements, and join us in the pursuit of excellence in software development and technology innovation.
            </Text>
            <Button variant='filled' className={classes.button} onClick={seeMoreHandler}>
                See more
            </Button>
        </div>
    </Container>
  )
}

export default Desc