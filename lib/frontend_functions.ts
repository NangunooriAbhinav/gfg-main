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

export const getQuestions = async () => {
    try{
        const {data} = await axios.get(
            `${config.api_url}/${config.v}/quiz/all`,
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

export const getResponses = async () => {
    try{
        const {data} = await axios.get(
            `${config.api_url}/${config.v}/response/all`,
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