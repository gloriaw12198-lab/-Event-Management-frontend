import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import EVENTS from "../../data/events";

const PER_PAGE = 6;

const Events = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ category: "All", location: "All", date: "" });
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return EVENTS.filter(({ title, category, location, date }) => {
      const matchQuery = title.toLowerCase().includes(query.toLowerCase());
      const matchCategory = filters.category === "All" || category === filters.category;
      const matchLocation = filters.location === "All" || location === filters.location;
      const matchDate = !filters.date || date === filters.date;
      return matchQuery && matchCategory && matchLocation && matchDate;
    });
  }, [query, filters]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleSearch = (val) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
        <p className="text-gray-500 mb-8">Browse and book from hundreds of events near you.</p>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <SearchBar value={query} onChange={handleSearch} />
          <Filters filters={filters} onChange={handleFilterChange} />
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-5">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-5xl mb-4">🔍</span>
            <h3 className="text-lg font-semibold text-gray-700">No events found</h3>
            <p className="text-sm text-gray-400 mt-1">Try changing your search or filters.</p>
          </div>
        )}

        <Pagination current={page} total={totalPages} onChange={setPage} />
      </main>

      <Footer />
    </div>
  );
};

export default Events;
