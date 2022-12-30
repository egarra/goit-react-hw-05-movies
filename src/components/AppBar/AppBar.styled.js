import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
     width: 100%;
    padding: 20px 50px;
    border-bottom: 2px solid black;
    box-shadow: 5px 3px 4px 1px rgba(10, 10, 4, 0.7);
    background: rgb(27 180 139 / 15%);
`
export const Nav = styled.nav`
    display: flex;
    gap: 20px;
    text-decoration: none;
    font-size: 20px;
   
`

export const NavItem = styled(NavLink)`
    color: rgb(27 180 139);
    border-radius: 5px;
    padding: 5px;

    &.active {
        color: white;
        background: rgb(27 180 139);
        border-radius: 5px;
        padding: 5px;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: white;
        background: rgb(27 180 139);
    }
`