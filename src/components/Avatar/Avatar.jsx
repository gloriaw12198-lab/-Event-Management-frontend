import { HiUser } from "react-icons/hi";

const Avatar = ({ src, name, size = "lg", onChange }) => {
  const sizes = {
    sm: "w-10 h-10 text-base",
    lg: "w-24 h-24 text-3xl",
  };

  const initials = name
    ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : null;

  return (
    <div className="relative inline-block">
      <div className={`${sizes[size]} rounded-full overflow-hidden bg-purple-100 flex items-center justify-center ring-4 ring-white shadow-md`}>
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="font-bold text-purple-600">{initials}</span>
        ) : (
          <HiUser className="text-purple-400 w-1/2 h-1/2" />
        )}
      </div>

      {onChange && (
        <label className="absolute bottom-0 right-0 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors shadow">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 16H7v-2a2 2 0 01.586-1.414z" />
          </svg>
          <input type="file" accept="image/*" className="hidden" onChange={onChange} />
        </label>
      )}
    </div>
  );
};

export default Avatar;
