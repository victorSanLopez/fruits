import { useState } from "react";
import data from "../assets/data/productList.json";
import ProductCatalog from "./ProductCatalog";
// import type { productsType } from "../lib/definitions";

export default function ProductFilter() {
	const [filter, setFilter] = useState(data);

	const springCategory = data.filter(
		(category) => category.seasons === "Printemps",
	);
	const summerCategory = data.filter((category) => category.seasons === "Été");
	const fallCategory = data.filter(
		(category) => category.seasons === "Automne",
	);
	const winterCategory = data.filter(
		(category) => category.seasons === "Hiver",
	);

	function handleClickSpring() {
		setFilter(springCategory);
	}

	function handleClickSummer() {
		setFilter(summerCategory);
	}
	function handleClickFall() {
		setFilter(fallCategory);
	}
	function handleClickWinter() {
		setFilter(winterCategory);
	}
	// cliquer une deuxième fois ?
	// ne pas se répéter ?
	return (
		<>
			<nav>
				<button type="button" onClick={handleClickSpring}>
					Printemps 🌱
				</button>
				<button type="button" onClick={handleClickSummer}>
					Été 🌻
				</button>
				<button type="button" onClick={handleClickFall}>
					Automne 🍂
				</button>
				<button type="button" onClick={handleClickWinter}>
					Hiver ⛄️
				</button>
			</nav>

			<main>
				<ProductCatalog category={filter} />
			</main>
		</>
	);
}
