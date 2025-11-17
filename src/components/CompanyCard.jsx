
export default function CompanyCard({ c }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{c.name}</h2>
      <p className="text-gray-500">{c.industry}</p>
      <p className="text-gray-600">{c.location}</p>
      <p className="text-sm mt-2 text-gray-700">Employees: {c.employees}</p>
    </div>
  );
}
