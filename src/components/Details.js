import React from "react";


function Details(props) {
	return (
		<div className="productWrapper">
			<p>{props.cookie.name}</p>
			<img alt={props.cookie.name} src={props.cookie.image} />
			<p className="product-price">{props.cookie.price} KD</p>
			<p>{props.cookie.description}</p>
		</div>
	);
}

export default Details;