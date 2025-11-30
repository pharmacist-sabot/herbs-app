// src/services/herbsService.js
const API_URL = import.meta.env.VITE_GOOGLE_API_URL;

export default {
  async getAllHerbs() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

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
