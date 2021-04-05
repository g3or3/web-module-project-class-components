import React from "react";

class Todo extends React.Component {
	render() {
		return (
			<div>
				<span onClick={this.props.checkOffTask}>
					{this.props.todo.task}
				</span>
			</div>
		);
	}
}

export default Todo;
