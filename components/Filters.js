function Filters({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>

      {/* Sort */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setSort("");
        }}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Filters;
