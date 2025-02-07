// utils/logger.ts
export const logError = (message: string) => {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] Error: ${message}`);
  };
  