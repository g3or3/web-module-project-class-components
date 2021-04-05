import React from "react";

class Todo extends React.Component {
	render() {
		return (
			<div onClick={this.props.checkOffTask}>{this.props.todo.task}</div>
		);
	}
}

export default Todo;
