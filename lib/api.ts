import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    "Content-type": "application/json",
    "X-API-Key": process.env.NEXT_PUBLIC_API_SECRET_KEY!,
  }
});