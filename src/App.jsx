
import { useState, useEffect, useMemo } from "react";
import companiesJSON from "./companies.json";
import Filters from "./components/Filters";
import CompanyCard from "./components/CompanyCard";
import Pagination from "./components/Pagination";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    setTimeout(() => {
      setCompanies(companiesJSON);
      setLoading(false);
    }, 500);
  }, []);

  const locations = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.location))],
    [companies]
  );

  const industries = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.industry))],
    [companies]
  );

  const filtered = useMemo(() => {
    let data = [...companies];

    if (query.trim()) {
      const q = query.toLowerCase();
      data = data.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.industry.toLowerCase().includes(q)
      );
    }

    if (filterLocation !== "All")
      data = data.filter((c) => c.location === filterLocation);

    if (filterIndustry !== "All")
      data = data.filter((c) => c.industry === filterIndustry);

    data.sort((a, b) => {
      const aVal = a[sortKey].toString().toLowerCase();
      const bVal = b[sortKey].toString().toLowerCase();
      return sortOrder === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });

    return data;
  }, [companies, query, filterLocation, filterIndustry, sortKey, sortOrder]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
        Loading companies...
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Companies Directory</h1>

      <Filters
        query={query}
        setQuery={setQuery}
        locations={locations}
        industries={industries}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
        filterIndustry={filterIndustry}
        setFilterIndustry={setFilterIndustry}
        sortKey={sortKey}
        setSortKey={setSortKey}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        resetPage={() => setPage(1)}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {visible.map((c) => (
          <CompanyCard key={c.id} c={c} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}
