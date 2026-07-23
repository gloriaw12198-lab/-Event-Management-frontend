import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-50 transition-colors"
      >
        <HiChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors
            ${p === current ? "bg-purple-600 text-white" : "border border-gray-300 hover:bg-gray-50 text-gray-700"}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="p-2 rounded-lg border border-gray-300 disabled:opacity-40 hover:bg-gray-50 transition-colors"
      >
        <HiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
