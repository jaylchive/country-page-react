import { Outlet } from 'react-router-dom';

import Hero from './Hero';

function AppLayout() {
  return (
    <div>
      <Hero />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
