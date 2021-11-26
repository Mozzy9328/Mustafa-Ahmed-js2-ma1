export function renderProducts(data) {
	const products = document.querySelector(".products");

	products.innerHTML = "";

	data.forEach((item) => {
		products.innerHTML += `
        <div class="item-text">
            <p> ${item.title} </p>
            <p>${item.price}</p>
            <button class="btn" style="padding:10px 20px" data-name="${item.title}"data-price="${item.price}">add item</button>
        </div>
    `;
	});
}
