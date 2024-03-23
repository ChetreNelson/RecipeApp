import axios from "axios";

const API = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/categories.php",
});

const API2 = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/filter.php",
});

const API3 = axios.create({
  baseURL :"https://www.themealdb.com/api/json/v1/1/lookup.php" 
});

export default { API, API2 , API3 };
