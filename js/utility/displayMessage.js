export function displayMessage(messageType, message, target) {
	const element = document.querySelector(target);
	const product = document.querySelector(".products");

	product.innerHTML = "";

	element.innerHTML = `<div class="${messageType}">
    ${message}
    </div> `;
}
