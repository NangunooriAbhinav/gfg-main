 
 export interface User {
    _id?: string;
    username: string;
    email: string;
    passwordHash: string;
    geekCoins: number;
    role: string;
    createdAt: Date;
    year: string;
    section: string;
  }
  

  export interface OTPRequest{
    email: string;
    otp: string;
  }

  export interface LoginRequest{
    email: string;
  }

  export interface CoinExchange{
    username: string;
    coins: number;
  }

  export type Quiz = {
    title: string;
    icon: string;
    iconbg: string;
    questions?: { question: string; options: String[]; answer: string }[];
  };
  
  export type Quizzes = Quiz[];
  
  export interface QuizResponse {
    id: string;       // Unique identifier for the quiz response
    userId: string;   // ID of the user who submitted the response
    score: number;    // Score obtained in the quiz
    quizId: string;   // ID of the associated quiz
  }
  