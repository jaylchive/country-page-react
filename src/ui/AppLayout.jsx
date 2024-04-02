import styled from 'styled-components';
import Hero from './Hero';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Hero />
      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
