 
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

  export interface CoinExchange{
    username: string;
    coins: number;
  }