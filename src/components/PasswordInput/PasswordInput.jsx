import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordInput = ({ label, error, className = "", ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className={`w-full px-4 py-3 pr-11 border rounded-lg text-sm outline-none transition-colors
            ${error ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-purple-500"} ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {show ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
