import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, Divider } from '@mantine/core';
import image from '../assets/hero.svg';
import classes from '../styles/Hero.module.css';
import CommIcon from '../assets/HeroComm.svg';
import CalIcon from '../assets/HeroCal.svg';



const HeroCard = (props)=> {

  return (
    <div className={classes.card}>
      <Group>
        <Image src={props.icon} fit='contain' className={classes.heroicon} />
        <Divider color='white' size="sm" style={{width: '60%'}}/>
      </Group>
      <div className={classes.heroCardContent} >
      <Title order={1} >{props.count}+</Title>
      <Text size='md' className={classes.text}>
        {props.text}
      </Text>

      </div>
    </div>
  )
}


export function Hero() {
  return (
    <Container size="lg" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            IOSD MAIT
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>
          <Group justify='space-between' className={classes.heroCards}>
            <HeroCard 
              icon={CommIcon}
              count={100}
              text="Active members, all working together to build a strong and thriving tech community."
            />
            <HeroCard 
              icon={CalIcon}
              count={10}
              text="Active events, each that provides great exposure and helps in building a stronger network."
            />
          </Group>

        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}