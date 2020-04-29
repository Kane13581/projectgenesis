import React from "react";
import Counters from './CalculatorComponents/counters';
import './CalculatorComponents/calculator.css';

class Calculator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
			}
		}
	}

	handleInput(e) {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now()
			}
		})
	}

	//addItem(e) {
	//	//e.preventDefault();
	//	const newItem = this.state.currentItem;
	//	console.log(newItem);
	//}

	render() {
		return (
			<div className="CalculatorPageStyle" >
				<div className="CalculatorApp">
					<div className="CalculatorList">
						<div className="ListStyle">
							<h1 className="CalcTextStyle">Items:</h1>
							<div className="ListItems">
								<header>
									<form id="to-do-form" onSubmit={this.addItem}>
										<input className="CalcInput" type="text" placeholder="Add Item"
											value={this.state.currentItem.text}
											onChange={this.handleInput} />
										<button className="CalcButton" type="submit" >Add</button>
									</form>
								</header>
							</div>
						</div>
					</div>
					<div className="CalculatorRoot">
						<div className="QuantityStyle">
							<h1 className="CalcTextStyle">Quantity:</h1>
						</div>
						<Counters />
					</div>
					<div className="CalculatorPrice">
						<div className="PriceStyle">
							<h1 className="CalcTextStyle">Price:</h1>
						</div>
					</div>
					<div className="CalculatorTotal">
						<div className="TotalStyle">
							<h1 className="CalcTextStyle">Total:</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}



export default Calculator;
