import { useState } from "react";
import type { productsType } from "../lib/definitions";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export default function ProductCatalog({
	category,
}: { category: productsType }) {
	const productList = category;

	const [selectedFruit, setSelectedFruit] = useState(productList[0]); // changer en même temps que la liste ?

	function handleClick() {
		setSelectedFruit(productList[0]);
	}

	return (
		<>
			<section className="fruits-icon-container">
				<button type="button" className="fruits-button" onClick={handleClick}>
					{productList.map((productListElement: productsType) => (
						<Product
							products={productListElement}
							key={productListElement.id}
						/>
					))}
				</button>
			</section>
			<aside className="details">
				<ProductDetails selection={selectedFruit} />
			</aside>
		</>
	);
}
