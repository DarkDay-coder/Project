import { Outlet } from 'react-router-dom';
import NavBar from '../../component/user/user.Navbar.component';
import Footer from './footerLayout.page';

const HomeLayout = () => {
   return (
      <>
         <NavBar />
         <Outlet />
         <Footer />
      </>
   );
};

export default HomeLayout;
