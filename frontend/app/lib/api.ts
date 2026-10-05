const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const api = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const res = await fetch(`${BASE}${path}`, init);
  if (!res.ok) throw new Error(`Request failt: ${res.status}`);
  return res.json();
};

export default api;
