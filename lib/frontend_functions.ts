import { config } from "@/config";
import { CoinExchange, OTPRequest, User } from "@/types";
import axios from "axios";
import { error } from "console";


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
        return {data: null, error: error}
    }
}

export const loginUser = async (email : string) =>{
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
        return {data: null, error: error}
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
        return {data: null, error: error}
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
        return {data: null, error: error}
    }
}