
import { useState } from "react";

export default function CompanyCard({ c }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded shadow cursor-pointer transition hover:shadow-lg 
        ${active ? "bg-blue-50 border border-blue-400" : "bg-white"}`}
    >
      <h2 className="text-xl font-semibold text-gray-800">{c.name}</h2>
      <p className="text-gray-500">{c.industry}</p>
      <p className="text-gray-600">{c.location}</p>
      <p className="text-sm mt-2 text-gray-700">Employees: {c.employees}</p>
    </div>
  );
}
