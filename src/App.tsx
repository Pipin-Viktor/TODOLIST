import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "normalize.css";
import { ItemList } from "./itemList";

// const todoList = [
// 	{ id: 1, todoName: "Wake up" },
// 	{ id: 2, todoName: "Brush teeth" },
// 	{ id: 3, todoName: "Have a coffee" },
// 	{ id: 4, todoName: "Feed the cat" },
// ];
const todoList = [
	{ todoName: "Wake up" },
	{ todoName: "Brush teeth" },
	{ todoName: "Have a coffee" },
	{ todoName: "Feed the cat" },
];

function App() {
	let num = 0;
	return (
		<div className="App">
			<div className="Header">My Todolist</div>
			<ul className="ItemsList">
				<div className="ItemsContainer">
					{todoList.map((item) => {
						// if (item.todoName === "Brush teeth") {
						// return null
						// } else {
						// 	return <ItemList itemNumber={num += 1} itemElement={item} date={new Date().toString()} />
						// }

						return item.todoName === "Brush teeth" ? null : (
							<ItemList
								itemNumber={(num += 1)}
								itemElement={item}
								date={new Date().toString()}
							/>
						);
					})}

					{/* <li>1. {todoList[0].todoName}</li>
					<li>2. {todoList[1].todoName}</li>
					<li>3. {todoList[2].todoName}</li>
					<li>4. {todoList[3].todoName}</li>  */}
				</div>
			</ul>
		</div>
	);
}

export default App;
