import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import image from '../assets/hero.svg';
import classes from '../styles/Hero.module.css';

const Hero=()=> {
  return (
    <Container size="md" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            IOSD MAIT
          </Title>
          <Text c="dimmed" mt="lg">
          Tech Innovations, Rooted in Heritage
          </Text>
          <Text c="dimmed" mt="md">
            Welcome to 'IOSD MAIT'—a thriving hub where technology and tradition harmoniously converge. 
            We are a passionate community of tech enthusiasts, driven by innovation and deeply rooted in our rich 
            heritage. 'IOSD MAIT' is not just a tech society; it's a journey that bridges the past and the future, 
            celebrating our cultural legacy while pioneering progress in the world of technology.
          </Text>

        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}

export default Hero;