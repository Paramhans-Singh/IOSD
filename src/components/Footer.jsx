import React from 'react';
import classes from "../styles/Footer.module.css"


import { Text, Container, ActionIcon, Group, rem, Image, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import IOSDLogo from '../assets/iosd-logo.png';
import { NavLink } from 'react-router-dom';

const data = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About us', link: '/about' },
      { label: 'Events', link: '/events' },
      { label: 'Team', link: '/team' },
      { label: 'Sponsors', link: '/sponser' },
    ],
  },
  
];

export default function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <NavLink
        key={index}
        className={classes.link}
        to={link.link}

      >
        {link.label}
      </NavLink>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Title order={4} className={classes.title}>{group.title}</Title>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src={IOSDLogo} />
          <Text size="l" c="dimmed" className={classes.description}>
            The Technical society of MAIT
          </Text>
        </div>
          <div className={classes.contact}>
            <Title order={4} className={classes.contactTitle}>
              Contact Us
            </Title>
            <Text className={classes.contactPhone}>
              +91-9999999999
            </Text>
            <Text className={classes.contactEmail}>
              mail@iosd.com
            </Text>
          </div>  
        <div className={classes.groups}>
          {groups}
        </div>
      </Container>
      <Container className={classes.afterFooter}>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
        <Text c="dimmed" size="sm">
          Copyright © {new Date().getFullYear()} All rights reserved by IOSD MAIT.
        </Text>
      </Container>
    </footer>
  );
}