import axios from "axios";
import BrandsAPI from "./brands.api";
import ProductsAPI from "./products.api";

const BASE_URL = "https://api.ballang.yoojinyoung.com/";

class API {
  #baseURL = BASE_URL;
  #client;

  Brands;
  Products;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.Products = new ProductsAPI(this.#client);
    this.Brands = new BrandsAPI(this.#client);
  }
}

const api = new API();
export default api;
