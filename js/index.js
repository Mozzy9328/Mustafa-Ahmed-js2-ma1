import { renderProducts } from "./utility/renderProducts.js";
import { searchProducts } from "./utility/searchProducts.js";

const url = "https://fakestoreapi.com/products";

async function callAPI() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

		renderProducts(data);
		searchProducts(data);
	} catch (error) {
		console.log(error);
	}
}

callAPI();
