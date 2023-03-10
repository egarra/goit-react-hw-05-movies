import { Header, Nav, NavItem } from './AppBar.styled';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  const navItems = [
    { href: '/', text: 'home' },
    { href: 'movies', text: 'movies' },
  ];

  return (
      <>
        <Header>
        <Nav>
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Nav>
      </Header>
      <Outlet/>
      </>
  );
};

export default AppBar;
