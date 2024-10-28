import styled, { css } from "styled-components";

export const Image = styled.img`
  ${(props) =>
    props.size === "small" &&
    css`
      height: 5.2rem;
      width: 5.2rem;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 15rem;
      width: 15rem;
    `}
    ${(props) =>
    props.size === "large" &&
    css`
      height: 30rem;
      width: 30rem;
    `}
    ${(props) =>
    props.size === "landscape-large" &&
    css`
      height: 25rem;
      width: 35rem;
    `}
    ${(props) =>
    props.variant === "banner" &&
    css`
      max-height: 4rem;
    `}

    ${(props) =>
    props.variant === "clickable" &&
    css`
      height: 25rem;
      width: 25rem;
      object-fit: cover;
      position: absolute;
      z-index: -1;
      border-radius: 36px;
    `}
`;
