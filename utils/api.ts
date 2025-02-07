// utils/api.ts

interface FetchOptions extends RequestInit {
    headers?: HeadersInit;
  }
  
  export const fetchData = async <T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> => {
    try {
      const res = await fetch(`${process.env.API_URL}/${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      });
  
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
  
      return await res.json();
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;  // Re-throwing to be handled in the component
    }
  };
  