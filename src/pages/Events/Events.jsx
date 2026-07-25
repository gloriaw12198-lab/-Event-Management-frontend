import { useState, useMemo } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import EVENTS from "../../data/events";

const PER_PAGE = 6;

const Events = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ category: "All", location: "All", date: "" });
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let filtered = EVENTS.filter(({ title, category, location, date }) => {
      return (
        title.toLowerCase().includes(query.toLowerCase()) &&
        (filters.category === "All" || category === filters.category) &&
        (filters.location === "All" || location === filters.location) &&
        (!filters.date || date === filters.date)
      );
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "upcoming":
          return new Date(a.date) - new Date(b.date);
        case "popular":
          return (b.seats || 0) - (a.seats || 0);
        case "price-low":
          return (a.price || 0) - (b.price || 0);
        case "price-high":
          return (b.price || 0) - (a.price || 0);
        default:
          return 0;
      }
    });

    return sorted;
  }, [query, filters, sortBy]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilterChange = (f) => { setFilters(f); setPage(1); };
  const handleSearch = (v) => { setQuery(v); setPage(1); };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
        <p className="text-gray-500 mb-8">Browse and book from hundreds of events near you.</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <SearchBar value={query} onChange={handleSearch} />
          <Filters filters={filters} onChange={handleFilterChange} />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <p className="text-sm text-gray-500 mb-5">{filtered.length} event{filtered.length !== 1 ? "s" : ""} found</p>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((event) => <EventCard key={event.id} event={event} />)}
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
