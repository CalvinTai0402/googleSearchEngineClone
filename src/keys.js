import dotenv from "dotenv";

dotenv.config();

console.log(process.env.API_KEY);

export const API_KEY = process.env.REACT_APP_API_KEY;

export const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;

export default API_KEY;
