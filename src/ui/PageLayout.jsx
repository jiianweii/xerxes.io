import styled, { css } from "styled-components";

export const GridLayout = styled.main`
  display: grid;
  max-width: 100dvw;
  ${(props) =>
    props.layout === "row" &&
    css`
      grid-template-rows: ${props.rowSize};
      grid-row-gap: ${props.rowGap || "2rem"};
    `}
  ${(props) =>
    props.layout === "col" &&
    css`
      grid-template-columns: ${props.colSize};
      grid-column-gap: ${props.colGap || "2rem"};
    `}
`;

export const FlexLayout = styled.div`
  display: flex;
  max-width: 100dvw;
  ${(props) =>
    props.layout === "row" &&
    css`
      justify-content: ${props.alignContent};
      align-items: ${props.alignItems};
    `}
  ${(props) =>
    props.layout === "col" &&
    css`
      flex-direction: column;
      justify-content: ${props.alignContent};
      align-items: ${props.alignItems};
    `}

  gap: ${(props) => props.gap || 0};
  flex-wrap: wrap;
`;

export const Section = styled.div`
  min-height: ${(props) => (props.height ? props.height : "50rem")};

  display: grid;

  ${(props) =>
    css`
      grid-template-columns: ${props.colSize};
      grid-column-gap: ${props.colGap || "0"};
      grid-template-rows: ${props.rowSize || "2rem"};
      justify-items: center;
    `}
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  & h1 {
    font-size: 3rem;
    font-weight: 700;
  }
  & p {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

export const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.align === "left"
      ? "start"
      : props.align === "right"
      ? "end"
      : "center"};
  justify-content: center;
`;
