import type { Herb, ApiResponse } from "@/types/Herb";

const API_URL = import.meta.env.VITE_GOOGLE_API_URL;

export default {
  async getAllHerbs(): Promise<ApiResponse<Herb[]>> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<Herb[]> = await response.json();

      if (data.status === "success") {
        return data;
      } else {
        throw new Error(data.message || "Failed to fetch herbs");
      }
    } catch (error) {
      console.error("Error in getAllHerbs:", error);
      throw error;
    }
  },
};
