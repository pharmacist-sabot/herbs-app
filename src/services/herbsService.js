// src/services/herbsService.js
const API_URL =
  "https://script.google.com/macros/s/AKfycbyGip0RMUlMwcIulE7tRcfHptx-qKLk2VNuziYxKvHATFn7gjaIeyE8E3Q4nk8qXfd8/exec"; // แทนที่ด้วย URL จาก Google Apps Script

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

  async getHerbById(id) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (data.status === "success") {
        return data;
      } else {
        throw new Error(data.message || "Failed to fetch herb");
      }
    } catch (error) {
      console.error("Error in getHerbById:", error);
      throw error;
    }
  },
};
