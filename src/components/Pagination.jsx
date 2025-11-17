
export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-4 py-2 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
