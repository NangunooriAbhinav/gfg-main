import { config } from "@/config";
import { CoinExchange, LoginRequest, OTPRequest, User } from "@/types";
import axios from "axios";



export const registerUser = async (user : User) =>{
    try{
        const {data} = await axios.post(
            `${config.api_url}/${config.v}/auth/register`,
            user,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}

export const loginUser = async (email : LoginRequest) =>{
    try{
        const {data} = await axios.post(
            `${config.api_url}/${config.v}/auth/login`,
            email,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}

export const verifyOtp = async (otp : OTPRequest) =>{
    try{
        const {data} = await axios.post(
            `${config.api_url}/${config.v}/auth/verify`,
            otp,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}

export const exchangeCoins = async (coinExchange : CoinExchange) =>{
    try{
        const {data} = await axios.post(
            `${config.api_url}/${config.v}/coins/exchange`,
            coinExchange,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}

export const getQuestions = async (jwt: string) => {
    try {
      const url = `${config.api_url}/${config.v}/quiz/all`;
      console.log(`Requesting questions from: ${url}`);
      console.log(`JWT used: ${jwt}`);
  
      const { data } = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      return { data, error: null };
    } catch (error) {
      console.error("Error fetching questions:", error);
      return { data: null, error : "Unknown error" };
    }
  };

export const createResponse = async (response : any, jwt: string) =>{
    try{
        const url = `${config.api_url}/${config.v}/response/create`;

        const {data} = await axios.post(
            url,
            response,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        return {data: data, error: null}

    }catch{
        return {data: null, error: "error"}
    }
}
  
export const getResponses = async (jwt : string) => {
    try{
        const {data} = await axios.get(
            `${config.api_url}/${config.v}/response/all`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}`
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}

export const getUserDetails = async (userId : string) => {
    try{
        const {data} = await axios.get(
            `${config.api_url}/${config.v}/users/${userId}`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        return {data: data, error: null}
    }catch{
        return {data: null, error: "error"}
    }
}