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
      console.log("Snacks retrieved successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error retrieving snack data:", error);
    }
  }
  static async postSnack(snackData) {
    try {
      const result = await axios.post("/snack", snackData);
      console.log("Snack posted successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error posting snack:", error);
    }
  }

  //Drinks static methods
  static async getDrinks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/drinks`);
      return result.data;
    } catch (error) {
      console.error("Error getting Drink:", error);
    }
  }

  static async postDrink(drinkData) {
    try {
      const result = await axios.post("/Drink", drinkData);
      console.log("Drink posted successfully:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error posting Drink:", error);
    }
  }
}

export default SnackOrBoozeApi;
