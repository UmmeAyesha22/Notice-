import { useMemo, useState } from "react";
import { notices, categories } from "../data/notices.js";
import NoticeItem from "./NoticeItem.jsx";

export default function NoticeList() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notices.filter((n) => {
      const inCategory = category === "All" || n.category === category;
      const inText = !q || (n.title + " " + n.summary).toLowerCase().includes(q);
      return inCategory && inText;
    });
  }, [category, query]);

  function clearFilters() {
    setCategory("All");
    setQuery("");
  }

  return (
    <section id="notices" aria-labelledby="notices-heading">
      <h2 id="notices-heading">Latest Notices</h2>

      <div className="toolbar">
        <label className="search">
          <span className="sr-only">Search notices</span>
          <input
            type="search"
            placeholder="Search notices"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="filters" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={c === category} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="notice-list">
          {shown.map((n) => (
            <NoticeItem key={n.id} notice={n} />
          ))}
        </div>
      ) : (
        <p className="empty">
          No notices match your search.{" "}
          <button type="button" className="link-button" onClick={clearFilters}>
            Show all notices
          </button>
        </p>
      )}
    </section>
  );
}
