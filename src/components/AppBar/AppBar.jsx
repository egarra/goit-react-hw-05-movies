import { Header, Nav, NavItem } from './AppBar.styled';

export const AppBar = () => {
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
    </>
  );
};
