// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = (props) => {
	const [query, setQuery] = useState("");

	const productList = products
		.filter((search) =>
			search.name.toLowerCase().includes(query.toLocaleLowerCase())
		)
		.map((product) => <ProductItem product={product} setDelete={props.setDeletebtn} setCookie={props.setCookie} key={product.id} />);

	const deletebtn = products.filter(filter => filter.id)

	return (
		<>
			<SearchBar setQuery={setQuery} />
			<div className="listWrapper">{productList}</div>
		</>
	);
};

export default ProductList;
