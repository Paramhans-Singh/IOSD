import { Container, Group, Title, Text, Card, Image, Badge, Button } from '@mantine/core'

import SeeAllEventsIcon from '../assets/SeeAllEventsIcon.svg';

import oritentationEvent from '../assets/techtalk.png'; 
import impulse from '../assets/impulse.jpg';
import hackwithmait from '../assets/hackwithmait.jpg';


import classes from '../styles/UpcomingEvents.module.css';
import { Link } from 'react-router-dom';






function EventCard(props) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
        <Card.Section className={classes.imgSection}>
          <Image
            src={props.img}
            alt={props.title}
          />
        </Card.Section>
        <Card.Section className={classes.cardSection}>

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
        </Card.Section>
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
    <div className={classes.container}>
        <Title order={1} >Upcoming Events</Title>
        <Group className={classes.events} justify='center'>
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
    </div>
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
    {
        id: 2,
        title: "Dev-Week",
        img: hackwithmait,
        date: 'TBA',
        caption: "Dive into a week of intensive tech learning during 'DevWeek.' We offer workshops, coding challenges, and hands-on experiences to enhance your skills."
    },
    {
        id: 3,
        title: "Impulse",
        img: impulse,
        date: 'TBA',
        caption: "Join us for 'Impulse,' our flagship event that brings together tech enthusiasts, industry experts, and students. It's a platform for learning, networking, and innovation."
    },

]