import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from '../styles/CardsCarousel.module.css';



function Card({ image, title, category }) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
       
      >
        <div className={classes.card} >
        <div>
          <h2 className={classes.title}>
            About Us
          </h2>
          <p className={classes.category} >
          The International Organization of Software Developers (IOSD) at the Maharaja Agrasen Institute of Technology (MAIT) is a dynamic tech community dedicated to advancing the field of software development and technology.
          </p>
        </div>
        <Button bg="#5BF3E1" c="dark" ff="sans-serif" fw="bold">
          Join Us
        </Button>
  
        </div>
      </Paper>
    );
  }
  
  function CardsCarousel({data}) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
      <Carousel.Slide key={item.title}>
        <Card {...item} />
      </Carousel.Slide>
    ));
  
    return (
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={1}
      >
        {slides}
      </Carousel>
    );
  }


  export default CardsCarousel;