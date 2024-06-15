import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  //Snacks static methods
  static async getSnacks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/snacks`);
      console.log("Snacks retrieved successfully:", response.data);
    } catch (error) {
      console.error("Error retrieving snack data:", error);
    } finally {
      return response.data;
    }
  }
  static async postSnack(snackData) {
    try {
      const response = await axios.post("/snack", snackData);
      console.log("Snack posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting snack:", error);
    } finally {
      return response.data;
    }
  }

  //Drinks static methods
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async postDrink(drinkData) {
    try {
      const response = await axios.post("/Drink", drinkData);
      console.log("Drink posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting Drink:", error);
    } finally {
      return response.data;
    }
  }
}

export default SnackOrBoozeApi;
