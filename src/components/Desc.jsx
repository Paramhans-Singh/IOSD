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
            <Image src={EventCollage} className={classes.image} />
            <div className={classes.content}>
                <Title order={1} >
                    Who are we?
                </Title>
                <Text className={classes.text}>
                    The "IOSD MAIT" is likely a college society at the Maharaja Agrasen Institute of Technology (MAIT) dedicated to technology and software development. College tech societies like IOSD MAIT play a crucial role in enhancing the technical skills and knowledge of students while fostering a vibrant tech community on campus. IOSD MAIT may organize a wide range of activities and initiatives, such as coding competitions, workshops on emerging technologies, hackathons, and coding bootcamps. These events provide students with hands-on experience, opportunities to learn from industry experts, and a chance to showcase their technical talents.
                </Text>
                <Button variant='filled' className={classes.button} onClick={seeMoreHandler}>
                    See more
                </Button>
            </div>
        </Container>
    )
}

export default Desc