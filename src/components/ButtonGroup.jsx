import styled from "styled-components";

const ButtonGrp = styled.div`
  display: flex;
  background-color: #4d4d4d;
  height: 3rem;
  border-radius: 12px;
`;

export default function ButtonGroup({ children }) {
  return <ButtonGrp>{children}</ButtonGrp>;
}
