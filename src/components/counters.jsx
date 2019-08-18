import React, { Component } from "react";
import Counter from "./counter";
import _ from "lodash";

class Counters extends Component {
	state = {
		counters: [
			{ id: 0, value: 4 },
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	onDelete = counterId => {
		this.setState({
			counter: _.remove(this.state.counters, ["id", counterId])
		});
	};
	render() {
		return (
			<div>
				{this.state.counters.map(counter => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.onDelete}
					/>
				))}
			</div>
		);
	}
}

export default Counters;
