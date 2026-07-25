const Loader = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-3",
    xl: "w-16 h-16 border-4",
  };

  return (
    <div
      className={`border-purple-200 border-t-purple-600 rounded-full animate-spin ${sizes[size]} ${className}`}
    />
  );
};

export default Loader;