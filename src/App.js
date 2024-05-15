import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

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
			searched: [],
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

	search = (query) => {
		const searchContent = this.state.todos.filter((todo) =>
			todo.task.includes(query)
		);
		this.setState({ searched: searchContent });
	};

	clearSearch = () => {
		this.setState({ searched: [] });
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
				<Search search={this.search} clearSearch={this.clearSearch} />
				{this.state.searched.map((res) => {
					return <div key={res.id}>{res.task}</div>;
				})}
			</div>
		);
	}
}

export default App;
