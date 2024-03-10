import { useEffect, useState } from "react";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/todo/api/get-content"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }

        const data = await response.json();
        setHistory(data.contentArray);
      } catch (error) {
        console.error("Error fetching history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">History</h2>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Content</th>
              <th className="py-2 px-4 border-b">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="py-2 px-4 border-b">{entry.content}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(entry.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
