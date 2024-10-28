import styled from "styled-components";
import { Button } from "../components/Button";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;
  & li {
    list-style-type: none;
  }
`;

const StyledLink = styled(Link)`
  color: initial;
  text-decoration: none;
`;

const Heading = styled.div``;

export default function Header() {
  return (
    <Heading>
      <Navigation>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <NavLinks>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="about">About Us</StyledLink>
          </li>
          <li>
            <StyledLink to="pricing">Our Pricings</StyledLink>
          </li>
          <li>
            <StyledLink to="contact">Contact</StyledLink>
          </li>
        </NavLinks>
        <NavLinks>
          <Button>Register</Button>
          <Button variant="outline">Sign In</Button>
        </NavLinks>
      </Navigation>
    </Heading>
  );
}
