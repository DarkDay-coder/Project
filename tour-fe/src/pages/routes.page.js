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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPrivateLayout from './layout/adminPrivateLayout.page';
import UserCreatePage from './admin/users/userCreate.page';
import UserEditPage from './admin/users/userEdit.page';
import TourListPage from './admin/tours/tourList.page';
import TourCreatePage from './admin/tours/tourCreatePage';
import LocationListPage from './admin/location/location-list.page';
import TourEditPage from './admin/tours/tourEdit.page';
import LocationCreatePage from './admin/location/locationCreate.page';
import LocationEditPage from './admin/location/locationEdit.page';
import AdminList from './admin/users/adminList.page';
import LeadGuideList from './admin/users/leadguideList.page';
import UserListPage from './admin/users/userList.page';
import GuideList from './admin/users/guideList.page';

const RoutePage = () => {
   return (
      <>
         <BrowserRouter>
            <ToastContainer />
            <Routes>
               <Route path="/" element={<HomeLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
               </Route>
               <Route
                  path="/admin"
                  element={<AdminPrivateLayout Compontent={<AdminLayout />} />}
               >
                  <Route index element={<AdminDashBoard />} />
                  <Route path="role/admin" element={<AdminList />} />
                  <Route path="role/lead-guide" element={<LeadGuideList />} />
                  <Route path="role/users" element={<UserListPage />} />
                  <Route path="role/guide" element={<GuideList />} />

                  <Route path="users/create" element={<UserCreatePage />} />
                  <Route path="users/:id/edit" element={<UserEditPage />} />

                  <Route path="tours" element={<TourListPage />} />
                  <Route path="tours/create" element={<TourCreatePage />} />
                  <Route path="tours/:id/edit" element={<TourEditPage />} />

                  <Route path="locations" element={<LocationListPage />} />
                  <Route
                     path="locations/create"
                     element={<LocationCreatePage />}
                  />
                  <Route
                     path="locations/:id/edit"
                     element={<LocationEditPage />}
                  />

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
