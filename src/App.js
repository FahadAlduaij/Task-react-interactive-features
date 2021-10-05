import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import Details from "./components/Details";
import { useState } from "react";

function App() {
	const [cookie, setCookie] = useState({
		id: 1,
		name: "Chocolate Chip Cookie",
		price: 10,
		image:
			"https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
		description: "The Chocolate Chip Cookie is cooked...........1",
	});

	return (
		<div>
			<Home />
			<ProductList setCookie={setCookie} />
			<Details cookie={cookie} />
		</div>
	);
}

export default App;
