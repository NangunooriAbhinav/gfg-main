"use client";
import Home from "@/app/components/quizcomponents/Home";
import { useState, useEffect } from "react";
import { Quizzes, Quiz } from "@/types";
import QuizPage from "../components/quizcomponents/QuizPage";
import ProtectedRoute from "../protected";
import { getQuestions } from "@/lib/frontend_functions";
import { useAuth } from "../context/AuthContext";

function App() {
  const authContext = useAuth();
  const { isAuthenticated, isLoading } = authContext
    ? authContext
    : { isAuthenticated: false, isLoading: true };

  const jwt = authContext?.token;

  const [quizzes, setQuizzes] = useState<Quizzes>();

  const [quizData, setQuizData] = useState<Quiz>({
    id: "",
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });

  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    const g = async () => {
      try {
        if (isAuthenticated && !isLoading && jwt) {
          const res = await getQuestions(jwt);
          console.log(res.data);
          setQuizzes(res.data.data);
        } else {
          console.log("Not authenticated");
        }
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };

    g();
  }, [isAuthenticated, isLoading, jwt]);

  return (
    <>
      <ProtectedRoute>
        <div className="h-[90vh] flex items-center">
          {quizzes ? (
            <>
              {toggle ? (
                <Home
                  quizzes={quizzes}
                  setQuizData={setQuizData}
                  settoggle={setToggle}
                />
              ) : (
                <QuizPage quizData={quizData} />
              )}
            </>
          ) : (
            <>
              <div>NO quizzes</div>
            </>
          )}
        </div>
      </ProtectedRoute>
    </>
  );
}

export default App;
