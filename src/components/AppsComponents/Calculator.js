import React from "react";
import Counters from './CalculatorComponents/counters';


function Calculator() {
	return (
		<div className="CalculatorPageStyle">
			<div className="CalculatorApp">
				<div className="CalculatorList">
					<div className="ListStyle">
						<h1>Items:</h1>
					</div>
				</div>
				<div className="CalculatorRoot">
					<div className="ListStyle">
						<h1>Quantity:</h1>
					</div>
					<Counters />
				</div>
				<div className="CalculatorPrice">
					<div className="PriceStyle">
						<h1>Price:</h1>
					</div>
				</div>
				<div className="CalculatorTotal">
					<div className="TotalStyle">
						<h1>Total:</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
