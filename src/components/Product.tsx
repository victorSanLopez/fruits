// import data from "../assets/data/productList.json";
import type { productsType } from "../lib/definitions";

export default function Product({ products }: { products: productsType }) {
	const { name, image } = products;

	return (
		<>
			<img className="fruits-icon" src={image} alt={`${name}`} />
		</>
	);
}
