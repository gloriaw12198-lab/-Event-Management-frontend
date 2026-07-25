import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";
import RegisteredEvents from "../../components/RegisteredEvents/RegisteredEvents";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { profile, updateProfile, registeredEvents, cancelRegistration } = useAuth();
  const [editing, setEditing] = useState(false);

  const handleSave = (data) => {
    updateProfile(data);
    setEditing(false);
  };

  const handleCancel = (eventId) => {
    if (window.confirm("Cancel your registration for this event?")) {
      cancelRegistration(eventId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — profile card or edit form */}
          <div className="lg:col-span-1">
            {editing ? (
              <EditProfileForm
                profile={profile}
                onSave={handleSave}
                onCancel={() => setEditing(false)}
              />
            ) : (
              <ProfileCard profile={profile} onEdit={() => setEditing(true)} />
            )}
          </div>

          {/* Right — registered events */}
          <div className="lg:col-span-2">
            <RegisteredEvents events={registeredEvents} onCancel={handleCancel} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
