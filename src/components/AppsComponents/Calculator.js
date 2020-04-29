import React from "react";
import Counters from './CalculatorComponents/counters';
import './CalculatorComponents/calculator.css';
import ListItems from './CalculatorComponents/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class Calculator extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: ''
			}
		}
		this.addItem = this.addItem.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.setUpdate = this.setUpdate.bind(this);
	}
	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== "") {
			const items = [...this.state.items, newItem];
			this.setState({
				items: items,
				currentItem: {
					text: '',
					key: ''
				}
			})
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
	deleteItem(key) {
		const filteredItems = this.state.items.filter(item =>
			item.key !== key);
		this.setState({
			items: filteredItems
		})

	}
	setUpdate(text, key) {
		console.log("items:" + this.state.items);
		const items = this.state.items;
		items.forEach(item => {
			if (item.key === key) {
				console.log(item.key + "    " + key)
				item.text = text;
			}
		})
		this.setState({
			items: items
		})


	}
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
										<input className="CalcInput" type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
										<button className="CalcButton" type="submit">Add</button>
									</form>
									<p>{this.state.items.text}</p>
									<div className="ListItemContainer">
										<ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
									</div>
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
