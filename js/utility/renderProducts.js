export function renderProducts(data) {
	const products = document.querySelector(".products");

	products.innerHTML = "";

	data.forEach((item) => {
		products.innerHTML += `
        <div class="item-text">
            <p data-name="${item.title}"> ${item.title} </p>
            <p data-price="${item.price}">${item.price}</p>
        </div>

    `;
	});
}
