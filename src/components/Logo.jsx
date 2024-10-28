import styled from "styled-components";
import { Image } from "./Image";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

export default function Logo() {
  return (
    <StyledLogo>
      <Image size="small" src="logo.png" alt="logo" />
    </StyledLogo>
  );
}
