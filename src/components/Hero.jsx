import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import image from '../assets/hero.svg';
import classes from '../styles/Hero.module.css';

export function Hero() {
  return (
    <Container size="md" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            IOSD MAIT
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}