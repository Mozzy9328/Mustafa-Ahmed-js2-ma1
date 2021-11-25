import { getExisitingWishList } from "./utility/wishListFunction.js";

const wishList = getExisitingWishList();

const productsContainer = document.querySelector(".products");

if (wishList.length === null) {
	productsContainer.innerHTML += `<p>There is no item added yet</p>`;
}

wishList.forEach((wishlist) => {
	productsContainer.innerHTML += `<div class="item-text">
                                            <span>x</span>
                                            <p> ${wishlist.name} </p>
                                        <p>${wishlist.price}</p>
                                        </div>`;
});
