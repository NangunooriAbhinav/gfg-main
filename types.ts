 
 export interface User {
    _id?: string;
    username: string;
    email: string;
    geekCoins: number;
    role: string;
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
    id: string;
    title: string;
    icon: string;
    iconbg: string;
    questions?: { question: string; options: string[]; answer: string }[];
  };
  
  export type Quizzes = Quiz[];
  
  export interface QuizResponse {
    id: string;       // Unique identifier for the quiz response
    userId: string;   // ID of the user who submitted the response
    score: number;    // Score obtained in the quiz
    quizId: string;   // ID of the associated quiz
    userName: string; // Name of the user who submitted the
  }
  
  export interface Jwtpayload {
    email: string;
    exp: number;
    uid: string;
  }