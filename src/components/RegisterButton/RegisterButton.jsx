import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RegisterButton = ({ eventId, price }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    // TODO: connect to Django backend registration endpoint
    alert(`Registration for event #${eventId} coming soon!`);
  };

  return (
    <div className="sticky bottom-4 z-10">
      <button
        onClick={handleClick}
        className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-200 transition-all duration-200 flex items-center justify-center gap-2 text-base"
      >
        {user ? (
          <>Register Now — {price === 0 ? "Free" : `Ksh ${price.toLocaleString()}`}</>
        ) : (
          <>Login to Register</>
        )}
      </button>
    </div>
  );
};

export default RegisterButton;
