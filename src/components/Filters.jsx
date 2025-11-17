
export default function Filters({
  query,
  setQuery,
  locations,
  industries,
  filterLocation,
  setFilterLocation,
  filterIndustry,
  setFilterIndustry,
  sortKey,
  setSortKey,
  sortOrder,
  setSortOrder,
  resetPage
}) {
  return (
    <div className="bg-white p-4 rounded shadow grid md:grid-cols-4 gap-4">
      <input
        placeholder="Search companies..."
        value={query}
        onChange={(e) => { setQuery(e.target.value); resetPage(); }}
        className="border p-2 rounded"
      />

      <select
        value={filterLocation}
        onChange={(e) => { setFilterLocation(e.target.value); resetPage(); }}
        className="border p-2 rounded"
      >
        {locations.map((loc) => (
          <option key={loc}>{loc}</option>
        ))}
      </select>

      <select
        value={filterIndustry}
        onChange={(e) => { setFilterIndustry(e.target.value); resetPage(); }}
        className="border p-2 rounded"
      >
        {industries.map((ind) => (
          <option key={ind}>{ind}</option>
        ))}
      </select>

      <div className="flex gap-2">
        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="industry">Industry</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="border px-3 rounded"
        >
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>
    </div>
  );
}
