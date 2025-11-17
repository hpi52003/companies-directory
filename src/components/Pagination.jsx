
export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-between items-center mt-10 px-4">

      
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="
          px-6 py-3 
          text-lg font-semibold 
          rounded-xl 
          bg-blue-600 text-white
          disabled:bg-gray-300 disabled:text-gray-600 
          shadow-md 
          hover:bg-blue-700 
          transition
        "
      >
        ◀ Prev
      </button>

      
      <span className="text-xl font-bold text-gray-800">
        Page {page} / {totalPages}
      </span>

      
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="
          px-6 py-3 
          text-lg font-semibold 
          rounded-xl 
          bg-blue-600 text-white
          disabled:bg-gray-300 disabled:text-gray-600 
          shadow-md 
          hover:bg-blue-700 
          transition
        "
      >
        Next ▶
      </button>
    </div>
  );
}

