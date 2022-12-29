import { Outlet } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import './admin.css';
import AdminNavBar from '../../component/admin/admin.Navbar.component';
import AdminSidebar from '../../component/admin/admin.Sidebar.component';
import AdminFooter from '../../component/admin/admin.footer.component';

const AdminLayout = () => {
   return (
      <>
         <AdminNavBar />
         <div id="layoutSidenav">
            <AdminSidebar />
            <div id="layoutSidenav_content">
               <main>
                  <Outlet />
               </main>
               <AdminFooter />
            </div>
         </div>
      </>
   );
};

export default AdminLayout;
