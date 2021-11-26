import { displayMessage } from "./utility/displayMessage.js";
import { getExisitingWishList } from "./utility/wishListFunction.js";

const wishList = getExisitingWishList();

const productsContainer = document.querySelector(".products");

function wishListFunction() {
	try {
		if (!wishList.length) {
			productsContainer.innerHTML = `<p>There is no item added yet</p>`;
		}

		wishList.forEach((wishlist) => {
			productsContainer.innerHTML += ` 
											<div class="item-text">
												<p> ${wishlist.name} </p>
												<p>${wishlist.price}</p>
											</div>
											`;
		});
		productsContainer.style.display = "flex";
		productsContainer.style.flexDirection = "column-reverse";
	} catch (error) {
		displayMessage("error", error, ".error");
	}
}

wishListFunction();

const xButton = document.querySelectorAll(".clear");

function removeWishList() {
	for (let i = 0; i < xButton.length; i++) {
		xButton[i].addEventListener("click", function (event) {
			event.target.style.display = "none";
			localStorage.clear("wishList");
			productsContainer.innerHTML = `<p>There is no item added yet</p>`;
		});
	}
}

removeWishList();
