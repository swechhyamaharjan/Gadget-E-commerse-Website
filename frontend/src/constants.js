// In production set VITE_API_URL in Vercel to your backend URL e.g. https://your-backend.vercel.app
// Locally this is empty so Vite proxy routes /api → localhost:3000
export const BASE_URL = import.meta.env.VITE_API_URL || "";
export const PRODUCT_URL = "/api/products";
export const USER_URL = "/api/user";
export const ORDER_URL = "/api/orders";
