import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import Clock from './clock'; // Clock 컴포넌트 import 추가
import "./list.css";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemNum: 0,
      items: []
    };
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.addItem();
    }
  };

  addItem() {
    const inputText = document.querySelector("#inputText");
    if (inputText.value) {
      const newItem = (
        <TodoListItem
          id={this.state.itemNum}
          text={inputText.value}
          delete={(num) => {
            this.deleteItem(num);
          }}
          removeItem={this.removeItem}
        />
      );
      this.setState(
        (prevState) => ({
          itemNum: prevState.itemNum + 1,
          items: [...prevState.items, newItem]
        }),
        () => {
          inputText.value = "";
        }
      );
    }
  }

  removeItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.props.id !== id)
    }));
  };

  render() {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
      <div className="container">
        <h1 className="title"> My Todo List</h1>
        <div   style={{ display: 'flex', alignItems: 'center' }}>
         <span className="clock">{formattedDate}</span>
         <Clock />
        </div>
        <div>
          <input
            className="input-Text"
            autoComplete="off"
            id="inputText"
            type="text"
            placeholder="Add New Todo"
            onKeyDown={this.handleKeyDown}
          />
          <input
            className="input-button"
            type="button"
            value="➕"
            onClick={() => {
              this.addItem();
            }}
          />
          <TodoList items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default Content;


