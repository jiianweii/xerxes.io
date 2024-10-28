import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in;
  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 3px solid #eceadb;
      background-color: transparent;
      padding: 1.2rem;
      font-weight: 700;
      &:hover {
        background-color: #ffffff;
        border: 3px solid #ffffff;
        color: #000000;
      }
    `}
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: #f0e9c5;
      padding: 1.2rem;
      color: #000000;
      font-weight: 700;

      &:hover {
        background-color: #ebde7c;
        color: #000000;
      }
    `}

    ${(props) =>
    props.variant === "variety" &&
    css`
      background-color: ${props.active ? "#313131" : "#4d4d4d"};
      padding: 0.8rem;
      color: #ffffff;
      font-weight: 700;

      &:hover {
        background-color: #313131;
        color: #ffffff;
      }
    `}
`;
