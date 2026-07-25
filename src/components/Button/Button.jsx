const Button = ({ children, type = "button", loading = false, variant = "primary", className = "", ...props }) => {
  const base = "w-full py-3 px-4 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
  };
  return (
    <button type={type} disabled={loading} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {loading && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
