import React from "react";
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";




function Games() {


	let { path, url } = useRouteMatch();

	return (
		<div>
			<h1>
				Games here!
			</h1>


		</div>
	);
}

export default Games;