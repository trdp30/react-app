import React, { Component } from "react";

class Counter extends Component {
	state = {
		value: this.props.counter.value,
	};

	handleIncreament = () => {
		this.setState({
			value: this.state.value + 1
		});
  };

	renderTags() {
		if (this.state.tags.length) {
			return (
				<ul>
					{this.state.tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			);
		} else {
			return <p>There are no tag available</p>;
		}
	}
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatedCount()}</span>
				<button
					onClick={() => this.handleIncreament()}
					className="btn btn-secondary btn-sm">
					Increament
				</button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
			</div>
		);
	}

	getBadgeClasses() {
		let badgeClasses = "badge m-2 badge-";
		badgeClasses += this.state.value === 0 ? "warning" : "primary";
		return badgeClasses;
	}

	formatedCount() {
		const { value } = this.state;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
