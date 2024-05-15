import React from "react";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = { taskName: "" };
	}

	inputChange = (evt) => {
		this.setState({ taskName: evt.target.value });
	};

	addNew = (evt) => {
		evt.preventDefault();
		this.props.addTodo(this.state.taskName);
		this.setState({ taskName: "" });
	};

	removeTasks = (evt) => {
		evt.preventDefault();
		this.props.clearCompletedTasks();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.addNew} style={{ display: "inline" }}>
					<input
						placeholder="...todo"
						onChange={this.inputChange}
						value={this.state.taskName}
					></input>
					<button>Add Todo</button>
				</form>
				<button onClick={this.removeTasks}>Clear Completed</button>
			</div>
		);
	}
}

export default TodoForm;
