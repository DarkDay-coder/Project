import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLayout from '../component/admin/adminLayout.component';
import AdminDashBoard from './admin/admin.dashboard.page';
import UsersListPage from './admin/users/userList.page';
import ErrorPage from './error.page';
import HomePage from './home.page';
import HomeLayout from './layout/homeLayout.page';
import LoginPage from './login.page';
import RegisterPage from './register.page';

const RoutePage = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<HomeLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
               </Route>
               <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminDashBoard />} />
                  <Route path="users" element={<UsersListPage />} />
                  {/* <Route path="tours">
                     <Route index element={<ToursListPage />} />
                     <Route path="create" element={<TourCreatePage />} />
                  </Route> */}
                  {/* <Route path="guides" element={<GuidesListPage />} />
                  <Route path="bookings" element={<BookingListPage />} /> */}
               </Route>
               {/* <Route path="/admin/*" element={<AdminErrorPage />}></Route> */}

               <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default RoutePage;
