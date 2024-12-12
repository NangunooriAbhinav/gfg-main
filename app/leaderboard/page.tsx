"use client";
import { getResponses } from "@/lib/frontend_functions";
import { useState, useEffect, use } from "react";

// Define a type for user data
type UserScore = {
  id: string;
  quizId: string;
  score: number;
  userId: string;
  userName: string;
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<UserScore[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await getResponses(
          window.localStorage.getItem("token") || ""
        );
        console.log(res.data);
        setLeaderboard(res.data.data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container h-[90vh] px-10 flex flex-col items-center mt-10">
      <h2 className="text-center text-2xl font-bold">Leaderboard</h2>
      <table className="w-full mt-6">
        <thead>
          <tr>
            <th className="text-left p-2">Rank</th>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{user.userName}</td>
              <td className="p-2">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
