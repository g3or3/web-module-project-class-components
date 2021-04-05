import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{
					task: "Learn React",
					id: Date.now(),
					completed: false,
				},
				{
					task: "Learn NodeJs",
					id: Date.now() + 1,
					completed: false,
				},
				{
					task: "Learn Magic",
					id: Date.now() + 2,
					completed: false,
				},
				{
					task: "Learn Salsa",
					id: Date.now() + 3,
					completed: false,
				},
				{
					task: "Learn Cooking",
					id: Date.now() + 4,
					completed: false,
				},
				{
					task: "Learn Lifting",
					id: Date.now() + 5,
					completed: false,
				},
				{
					task: "Learn Something",
					id: Date.now() + 6,
					completed: false,
				},
				{
					task: "Learn Else",
					id: Date.now() + 7,
					completed: false,
				},
			],
		};
	}

	addTodo = (newTask) => {
		const newTodo = {
			task: newTask,
			id: Date.now(),
			completed: false,
		};

		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	checkOffTask = (evt) => {
		evt.persist();
		evt.target.style.textDecoration =
			evt.target.style.textDecoration === "" ? "line-through" : "";
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.task === evt.target.textContent)
					todo.completed = !todo.completed;
				return todo;
			}),
		});
	};

	clearCompletedTasks = () => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.completed !== true),
		});
	};

	render() {
		return (
			<div>
				<h1>Welcome to your Todo App!</h1>
				<TodoList
					todos={this.state.todos}
					checkOffTask={this.checkOffTask}
				/>
				<TodoForm
					addTodo={this.addTodo}
					clearCompletedTasks={this.clearCompletedTasks}
				/>
			</div>
		);
	}
}

export default App;
