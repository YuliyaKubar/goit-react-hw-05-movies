import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom/dist';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {/* <Suspense fallback={null} key={location.key}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Layout;
