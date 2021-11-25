export function getExisitingWishList() {
	const wishes = localStorage.getItem("wishList");

	if (wishes === null) {
		return [];
	} else {
		return JSON.parse(wishes);
	}
}
