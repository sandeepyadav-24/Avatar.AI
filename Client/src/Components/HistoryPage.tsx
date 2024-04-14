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
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:46:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:44:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:42:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-14/ 09:38:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:36:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:26:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:24:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:16:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 09:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 08:46:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 08:26:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 07:26:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 07:16:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-14 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:16:25</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:11:10</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:59:05</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:15</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Twitter</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:16:35</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">LinkedIn</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:10:08</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Hashnode</th>
              <th className="py-2 px-4 border-b">2024-04-13 / 22:06:05</th>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
