import { displayMessage } from "./utility/displayMessage.js";
import { renderProducts } from "./utility/renderProducts.js";
import { searchProducts } from "./utility/searchProducts.js";
import { getExisitingWishList } from "./utility/wishListFunction.js";

const url = "https://fakestoreapi.com/products";

async function callAPI() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);

		renderProducts(data);
		searchProducts(data);

		const btn = document.querySelectorAll(".btn");

		btn.forEach((itemButton) => {
			itemButton.addEventListener("click", handleClick);
		});

		function handleClick(event) {
			console.log(event.target);

			const productName = this.dataset.name;
			const productPrice = this.dataset.price;

			const currentWishList = getExisitingWishList();

			const productExists = currentWishList.find(function (wish) {
				return wish.name === productName;
			});

			if (!productExists) {
				const product = { name: productName, price: productPrice };
				currentWishList.push(product);
				saveWishList(currentWishList);
			} else {
				const newWishList = currentWishList.filter(
					(wish) => wish.name !== productName
				);
				saveWishList(newWishList);
			}
		}

		function saveWishList(wishes) {
			localStorage.setItem("wishList", JSON.stringify(wishes));
		}
	} catch (error) {
		displayMessage("error", error, ".error");
	}
}

callAPI();
