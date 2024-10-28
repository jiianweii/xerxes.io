import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
}
