const CATEGORIES = ["All", "Technology", "Music", "Art", "Business", "Sports", "Food"];
const LOCATIONS = ["All", "Nairobi", "Mombasa", "Kisumu", "Nakuru"];

const Filters = ({ filters, onChange }) => {
  const select = "px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-500 bg-white transition-colors cursor-pointer";

  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        className={select}
      >
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>

      <select
        value={filters.location}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
        className={select}
      >
        {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
      </select>

      <input
        type="date"
        value={filters.date}
        onChange={(e) => onChange({ ...filters, date: e.target.value })}
        className={select}
      />

      {(filters.category !== "All" || filters.location !== "All" || filters.date) && (
        <button
          onClick={() => onChange({ category: "All", location: "All", date: "" })}
          className="px-4 py-3 text-sm text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default Filters;
