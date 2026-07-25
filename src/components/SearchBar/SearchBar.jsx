import { HiSearch, HiX } from "react-icons/hi";

const SearchBar = ({ value, onChange }) => (
  <div className="relative flex-1 min-w-0">
    <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search events..."
      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-purple-500 transition-colors"
    />
    {value && (
      <button onClick={() => onChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
        <HiX className="w-4 h-4" />
      </button>
    )}
  </div>
);

export default SearchBar;