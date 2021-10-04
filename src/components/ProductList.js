// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {


	const [query, setQuery] = useState("");

  let filtered = products
		.filter((search) => search.name.includes(query))
    const productList = filtered.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));

	return (
		<>
			<SearchBar setQuery={setQuery} />
			<div className="listWrapper">{productList}</div>
		</>
	);
};

export default ProductList;
