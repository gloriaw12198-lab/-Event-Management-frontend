import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  { label: "Music", icon: "🎵" },
  { label: "Technology", icon: "💻" },
  { label: "Sports", icon: "🏅" },
  { label: "Art", icon: "🎨" },
  { label: "Food", icon: "🍽️" },
  { label: "Business", icon: "💼" },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {CATEGORIES.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => navigate(`/events?category=${label}`)}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-300 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-xs font-medium text-gray-700">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
