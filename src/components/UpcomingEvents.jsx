import { Container, Group, Title, Text, Card, Image, Badge, Button } from '@mantine/core'

import SeeAllEventsIcon from '../assets/SeeAllEventsIcon.svg';

import oritentationEvent from '../assets/techtalk.png'; 


import classes from '../styles/UpcomingEvents.module.css';
import { Link } from 'react-router-dom';






function EventCard(props) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
        <Card.Section>
          <Image
            src={props.img}
            alt={props.title}
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{props.title}</Text>
          <Badge color="pink" variant="light">
            {props.date}
          </Badge>
        </Group>
  
        <Text size="sm" c="dimmed">
            {props.caption}
        </Text>
  
        <Button fullWidth mt="md" radius="md" className={classes.button}>
          View
        </Button>
      </Card>
    );
  }

const SeeMoreCard = ()=> {

    return (
        <Card shadow="sm" padding="xl" radius="md" withBorder className={classes.seeMoreCard}>
            <Image src={SeeAllEventsIcon} w={100}/>
            <Link to='/events' style={{textDecoration: 'none'}}>

            <Title order={2} className={classes.seeMoreText} >See all events &gt; </Title>
            </Link>
        </Card>
    )
}

const UpcomingEvents = () => {
  return (
    <Container size="lg" className={classes.container}>
        <Title order={1} >Upcoming Events</Title>
        <Group className={classes.events}>
            {events.map((event)=> (
                <EventCard key={event.id} 
                    title={event.title}
                    img={event.img}
                    date={event.date}
                    caption={event.caption}
                />
            ))}
            <SeeMoreCard />
        </Group> 
    </Container>
  )
}

export default UpcomingEvents



const events = [
    {
        id: 1,
        title: "Orientation",
        img: oritentationEvent,
        date: '4th October 2023',
        caption: "Welcome to the *IOSD MAIT*, where innovation knows no bounds! 🌟👩‍💻 Join us on this incredible journey of coding, creativity, and community."
    },

]