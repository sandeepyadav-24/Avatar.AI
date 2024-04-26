import { useEffect, useState } from "react";
import LeftNavbar1 from "./LeftNavbar1";
import HistoryBoard from "./HistoryBoard";

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
    <div className="flex flex-row h-screen bg-[#0E1011]">
      <LeftNavbar1 />
      <HistoryBoard />
    </div>
  );
};

export default HistoryPage;
