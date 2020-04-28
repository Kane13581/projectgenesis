import React from "react";
import {
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";



import Calculator from "./AppsComponents/Calculator";
import Calendar from "./AppsComponents/Calendar";



function Hobbies() {

	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	return (
		<div>

			<div className="AppsNav">

				<div className="CalculatorNav">
					<Link className="HobbieLinkStyle" to={`${url}/Calculator`}>Calculator</Link>
				</div>
				<div className="CalendarNav">
					<Link className="HobbieLinkStyle" to={`${url}/Calendar`}>Calendar</Link>
				</div>


			</div>


			<div>
				<Switch>
					<Route exact path={path}>

						<div className="HobbieMidBorder">
							<h3 className="HobbieSelect">If you like to use one of the apps above, please select any.</h3>
						</div>
						<div className="HobbieBackground">
							{/*<img className="GlowAnimation" src={require('./../Assets/Hobbies/smoke1.png')} alt="location.jpg" />*/}
						</div>


					</Route>
					<Route path="/Apps/Calculator">
						<Calculator />
					</Route>
					<Route path="/Apps/Calendar">
						<Calendar />
					</Route>

				</Switch>
			</div>

		</div>
	);
}

export default Hobbies;