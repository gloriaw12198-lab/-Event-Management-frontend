import { HiMail, HiPhone, HiShieldCheck } from "react-icons/hi";
import Avatar from "../Avatar/Avatar";

const ProfileCard = ({ profile, onEdit }) => {
  const { fullName, email, phone, role, avatar } = profile;

  const rows = [
    { icon: <HiMail className="w-4 h-4 text-purple-500" />, label: "Email", value: email },
    { icon: <HiPhone className="w-4 h-4 text-purple-500" />, label: "Phone", value: phone || "Not set" },
    { icon: <HiShieldCheck className="w-4 h-4 text-purple-500" />, label: "Role", value: role },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col items-center gap-5">
      <Avatar src={avatar} name={fullName} size="lg" />

      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">{fullName}</h2>
        <span className="inline-block mt-1 text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-0.5 rounded-full">
          {role}
        </span>
      </div>

      <div className="w-full flex flex-col gap-3 border-t border-gray-100 pt-4">
        {rows.map(({ icon, label, value }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="shrink-0">{icon}</span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{label}</p>
              <p className="text-sm text-gray-800 font-medium truncate">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onEdit}
        className="w-full mt-1 py-2.5 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors text-sm"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCard;
