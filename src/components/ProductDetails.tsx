// import type { productsType } from "../lib/definitions";

import type { productsType } from "../lib/definitions";

export default function ProductDetails({
	selection,
}: { selection: productsType }) {
	const { name, image, description } = selection;

	return (
		<>
			<img className="image-detail" src={image} alt={`${"name"}.`} />
			<h2>{name}</h2>
			<p>{description}</p>
		</>
	);
}
