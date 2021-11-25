import { renderProducts } from "./renderProducts.js";

export function searchProducts(data) {
	const priceFilter = document.querySelector(".filter-price");

	priceFilter.onkeyup = function (event) {
		const searchPrice = event.target.value.trim();
		console.log(searchPrice);

		const filteredNameSearch = data.filter(function (item) {
			if (item.price <= searchPrice) {
				console.log(item.price);
				return true;
			}
		});
		renderProducts(filteredNameSearch);
	};
}
