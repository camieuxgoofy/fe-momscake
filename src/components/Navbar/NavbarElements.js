import styled from "styled-components";
import {
  Link as LinkR
} from "react-router-dom";
import {
  Link as LinkS
} from "react-scroll";

export const Nav = styled.nav `
  background: #000;

  --size: 50px;
  --p: 25px;
  --R: 55.9px;
  
  height: 200px;

  -webkit-mask: radial-gradient(var(--R) at 50% calc(100% - (var(--size) + var(--p))),#4b0a11 99%,#e2000000 101%) calc(50% - 2*var(--size)) 0/calc(4*var(--size)) 100%, radial-gradient(var(--R) at 50% calc(100% + var(--p)),#ce040400 99%,#422d26 101%) 50% calc(100% - var(--size))/calc(4*var(--size)) 100% repeat-x;
    background: linear-gradient(90deg,#460a10,#332320);
  border: none;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: -90px;

  @media screen and (max-width: 960px) {
    transition: 0.8ms all ease;
  }
`;

export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)
`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 72.5%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li `
  height: 80px;
`;

export const NavLinks = styled(LinkS)
`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)
`
  padding: 8px 20px;
  border-radius: 50px;
  background: #01bf71;
  white-space: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;