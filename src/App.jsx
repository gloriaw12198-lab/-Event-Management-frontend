import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventDetails from "./pages/EventDetails/EventDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Organizer from "./pages/Organizer/Organizer";
import OrganizerEvents from "./pages/Organizer/OrganizerEvents";
import CreateEvent from "./pages/Organizer/CreateEvent";
import EditEvent from "./pages/Organizer/EditEvent";
import AttendeeList from "./pages/Organizer/AttendeeList";
import Admin from "./pages/Admin/Admin";
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageEvents from "./pages/Admin/ManageEvents";
import ManageCategories from "./pages/Admin/ManageCategories";
import ManageVenues from "./pages/Admin/ManageVenues";
import Reports from "./pages/Admin/Reports";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
            <Route path="/events/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            
            {/* Organizer Routes */}
            <Route path="/organizer" element={<ProtectedRoute><Organizer /></ProtectedRoute>} />
            <Route path="/organizer/events" element={<ProtectedRoute><OrganizerEvents /></ProtectedRoute>} />
            <Route path="/organizer/create-event" element={<ProtectedRoute><CreateEvent /></ProtectedRoute>} />
            <Route path="/organizer/edit-event/:id" element={<ProtectedRoute><EditEvent /></ProtectedRoute>} />
            <Route path="/organizer/attendees/:id" element={<ProtectedRoute><AttendeeList /></ProtectedRoute>} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} />
            <Route path="/admin/events" element={<ProtectedRoute><ManageEvents /></ProtectedRoute>} />
            <Route path="/admin/categories" element={<ProtectedRoute><ManageCategories /></ProtectedRoute>} />
            <Route path="/admin/venues" element={<ProtectedRoute><ManageVenues /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
