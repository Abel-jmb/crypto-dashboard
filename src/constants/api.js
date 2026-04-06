export const API_URL = import.meta.env.VITE_API_URL
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    'x-cg-demo-api-key': import.meta.env.VITE_API_KEY
  }
}