import { Button, Container, Image, Text, Title } from '@mantine/core'
import React from 'react'
import EventCollage from '../assets/EventCollage.svg';
import classes from '../styles/Desc.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Desc = () => {

    const navigate = useNavigate();

    const seeMoreHandler = ()=> navigate('/about');



  return (
    <Container size="lg" className={classes.container}>
        <Image src={EventCollage} className={classes.image}/>
        <div className={classes.content}>
            <Title order={1} >
                Who are we?
            </Title>
            <Text className={classes.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error obcaecati facilis doloremque tempora. Id laboriosam magnam est repellendus cupiditate, expedita omnis facere ut odit fugiat sint velit, quam explicabo.
                Hic beatae in sunt repellendus ad cupiditate, harum exercitationem porro sequi labore vero. Eaque rerum, fuga atque, natus suscipit, ex ipsam quis aspernatur eveniet voluptatem itaque repudiandae earum doloribus quas.
                Quaerat aliquid nostrum recusandae, obcaecati facere iste magnam ex non possimus vero veniam hic, quos deserunt, atque consequuntur necessitatibus? Quaerat quidem dolorem tempore iure harum reiciendis dicta repellat corrupti? Necessitatibus.
            </Text>
            <Button variant='filled' className={classes.button} onClick={seeMoreHandler}>
                See more
            </Button>
        </div>
    </Container>
  )
}

export default Desc