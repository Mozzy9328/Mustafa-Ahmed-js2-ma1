export function renderProducts(data) {
	const products = document.querySelector(".products");

	products.innerHTML = "";

	data.forEach((item) => {
		products.innerHTML += `
        <div class="item-text">
            <p> ${item.title} </p>
            <p>NOK: ${item.price}kr</p>
            <button class="btn" data-name="${item.title}"data-price="${item.price}">add item</button>
        </div>
    `;
	});
}
