import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../styles/Navbar.module.css';
import {  NavLink, Outlet } from 'react-router-dom';
import IOSDLogo from '../assets/iosd-logo.png';

const links = [
  { link: '/about', label: 'About' },
  { link: '/team', label: 'Team' },
  { link: '/events', label: 'Events' },
  { link: '/member', label: 'Member' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/sponser', label: 'Sponser' },
];

export default function Layout() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
    >
      {link.label}
    </NavLink>
  ));

  return (<>
    <header className={classes.header}>
          <NavLink to='/' className={classes.imgContainer}>

          <img src={IOSDLogo} alt="IOSD Logo" />
          </NavLink>


        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      {/* <Group size="md" className={classes.inner}>
      </Group> */}
    </header>
    <Outlet />
  </>
  );
}