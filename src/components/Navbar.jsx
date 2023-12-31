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
  { link: '/members', label: 'Members' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/sponser', label: 'Sponsor' },
  // { link: '/join', label: 'Join Us'},

];

const Navbar=() => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  // const scrollRestoration = useScrollRestoration();


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
        <a href='https://forms.gle/MvgPfScNS7hdceFw5' target='_blank'>
        <button type="button" className={classes.button} >
          Join us 
        </button>
        </a>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      {/* <Group size="md" className={classes.inner}>
      </Group> */}
    </header>
    <Outlet/>
    {/* <Outlet className={`${classes.scrollableContent} ${scrollRestoration}`} /> */}
  </>
  );
}

export default Navbar;