import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import EVENTS from "../data/events";

const AuthContext = createContext(null);

const DEFAULT_PROFILE = {
  fullName: "Gloria Wanja",
  email: "gloria@example.com",
  phone: "+254 712 345 678",
  role: "Attendee",
  avatar: null,
};

// Mock: user is registered for events 1, 2, 4
const DEFAULT_REGISTERED_IDS = [1, 2, 4];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });
  const [registeredIds, setRegisteredIds] = useState(() => {
    const saved = localStorage.getItem("registeredIds");
    return saved ? JSON.parse(saved) : DEFAULT_REGISTERED_IDS;
  });

  useEffect(() => {
    if (token) {
      try { setUser(jwtDecode(token)); }
      catch { logout(); }
    }
  }, [token]);

  const login = (accessToken) => {
    localStorage.setItem("token", accessToken);
    setToken(accessToken);
    setUser(jwtDecode(accessToken));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const updateProfile = (data) => {
    const updated = { ...profile, ...data };
    setProfile(updated);
    localStorage.setItem("profile", JSON.stringify(updated));
  };

  const cancelRegistration = (eventId) => {
    const updated = registeredIds.filter((id) => id !== eventId);
    setRegisteredIds(updated);
    localStorage.setItem("registeredIds", JSON.stringify(updated));
  };

  const registeredEvents = EVENTS.filter((e) => registeredIds.includes(e.id));

  return (
    <AuthContext.Provider value={{ user, token, login, logout, profile, updateProfile, registeredEvents, cancelRegistration }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
