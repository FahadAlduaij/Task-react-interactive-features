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

  const [theme, setTheme] = useState("lighttheme")
  const [deletebtn, setDeletebtn] = useState("")

	return (
		<div className={theme}>
			<Home setTheme={setTheme} theme={theme}/>
			<ProductList setCookie={setCookie} setDelete={setDeletebtn} />
			<Details cookie={cookie} />
		</div>
	);
}

export default App;
