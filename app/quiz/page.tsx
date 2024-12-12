"use client";
import Home from "@/app/components/quizcomponents/Home";
import Navbar from "@/app/components/quizcomponents/Navbar";
import { useState, useEffect } from "react";
import data from "@/data.json";
import { Quizzes, Quiz } from "@/types";
import QuizPage from "../components/quizcomponents/QuizPage";
import ProtectedRoute from "../protected";

function App() {
  const quizzes: Quizzes = data.quizzes;

  const [quizData, setQuizData] = useState<Quiz>({
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });

  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("themeMode") as "light" | "dark";
    if (storedTheme) {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply themeMode to the HTML element
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the current themeMode in localStorage
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const handleThemeMode = () => {
    setThemeMode((prevThemeMode) =>
      prevThemeMode === "light" ? "dark" : "light"
    );
  };

  return (
    <>
      <ProtectedRoute>
        <div className="h-[90vh] flex items-center">
          {toggle ? (
            <Home
              quizzes={quizzes}
              setQuizData={setQuizData}
              settoggle={setToggle}
            />
          ) : (
            <QuizPage quizData={quizData} />
          )}
        </div>
      </ProtectedRoute>
    </>
  );
}

export default App;
