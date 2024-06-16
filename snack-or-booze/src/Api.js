import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

*/

/**
 * SnackOrBoozeApi class
 * This class provides static methods for interacting with a RESTful API to retrieve and create snacks and drinks.
 */
class SnackOrBoozeApi {
  /**
   * Retrieves a list of snacks from the API.
   * @returns {Promise<Array>} A Promise that resolves to an array of snack objects.
   */
  static async getSnacks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/snacks`);
      console.log("Snacks retrieved successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error retrieving snack data:", error);
    }
  }

  /**
   * Creates a new snack by sending a POST request to the API.
   * @param {Object} snackData - The data for the new snack.
   * @returns {Promise<Object>} A Promise that resolves to the created snack object.
   */
  static async postSnack(snackData) {
    try {
      const result = await axios.post(`${BASE_API_URL}/snacks`, snackData);
      console.log("Snack posted successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error posting snack:", error);
    }
  }

  /**
   * Retrieves a list of drinks from the API.
   * @returns {Promise<Array>} A Promise that resolves to an array of drink objects.
   */
  static async getDrinks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/drinks`);
      return result.data;
    } catch (error) {
      console.error("Error getting Drink:", error);
    }
  }

  /**
   * Creates a new drink by sending a POST request to the API.
   * @param {Object} drinkData - The data for the new drink.
   * @returns {Promise<Object>} A Promise that resolves to the created drink object.
   */
  static async postDrink(drinkData) {
    try {
      const result = await axios.post(`${BASE_API_URL}/drinks`, drinkData);
      console.log("Drink posted successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error posting Drink:", error);
    }
  }
}

export default SnackOrBoozeApi;