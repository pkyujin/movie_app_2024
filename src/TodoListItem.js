import { Component } from "react";
import "./list.css";

export default class TodoListItem extends Component {
	checkItem() {
	  const textComponent = document.querySelector("#todo-item-text" + this.props.id);
	  if (textComponent.style.textDecoration === "line-through") {
		textComponent.style.textDecoration = "";
		textComponent.style.color = "";
	  } else {
		textComponent.style.textDecoration = "line-through";
		textComponent.style.color = "gray";
	  }
	}
  
	render() {
	  return (
		<div className="list-container">
		  <li id={"todo-item"+this.props.id} className="list">
			<span id={"todo-item-text"+this.props.id}>{this.props.text}</span>
			<div className="button-group">
			  <input id="buttons" type="button" value="✅" onClick={() => this.checkItem()} style={{ background: 'none', border: 'none', cursor: 'pointer' }} />
			  <input id="buttons" type="button" value="❎" onClick={() => this.props.removeItem(this.props.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }} />
			</div>
		  </li>
		</div>
	  )
	}
  }
  