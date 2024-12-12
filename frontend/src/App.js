import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/home/Homepage'
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import AllRoomsPage from './components/booking_rooms/AllRoomsPage';
import FindBookingPage from './components/booking_rooms/FindBookingsPage'
// import RoomDetailsBookingPage from './components/booking_rooms/RoomDetailsBookingPage'
import RoomDetailsBookingPage from './components/booking_rooms/RoomDetailsPage'
import AdminPage from './components/admin/AdminPage';
import EditBookingPage from './components/admin/EditBookingPage';
import EditRoomPage from './components/admin/EditRoomPage';
import ManageBookingsPage from './components/admin/ManageBookingsPage';
import ManageRoomPage from './components/admin/ManageRoomPage';
import ApiService from './service/AppService'
import { ProtectedRoute, AdminRoute } from './service/guard'
import ProfilePage from './components/profile/ProfilePage';
import EditProfilePage from './components/profile/EditProfilePage';
import AddRoomPage from './components/admin/AddRoomPage';
import FooterComponent from './components/common/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/rooms" element={<AllRoomsPage />} />
            <Route path="/find-booking" element={<FindBookingPage />} />

            {/* Protected Routes */}
            <Route path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetailsBookingPage />} />}
            />
            <Route path="/profile"
              element={<ProtectedRoute element={<ProfilePage />} />}
            />
            <Route path="/edit-profile"
              element={<ProtectedRoute element={<EditProfilePage />} />}
            />

            {/* Admin Routes */}
            <Route path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route path="/admin/edit-booking/:bookingCode"
              element={<AdminRoute element={<EditBookingPage />} />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
