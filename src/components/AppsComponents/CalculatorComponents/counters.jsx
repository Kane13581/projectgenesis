import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },

		]
	}
	render() {
		return (
			<div className="CounterBoard">
				<div className="CounterStyle">
					{this.state.counters.map(counter => (
						<Counter key={counter.id} value={counter.value} >
						</Counter>
					))}
				</div>
			</div>
		);
	}
}

export default Counters;