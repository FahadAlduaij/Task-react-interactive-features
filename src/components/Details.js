import React from "react";


function Details(props) {
	return (
		<div className="details">
			<img alt={props.cookie.name} src={props.cookie.image} />
			<h3>{props.cookie.name}</h3>
			<h4 className="product-price">{props.cookie.price} KD</h4>
			<p>{props.cookie.description}</p>
		</div>
	);
}

export default Details;