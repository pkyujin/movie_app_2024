import { Component } from "react";
import TodoList from "./TodoList"
import TodoListItem from "./TodoListItem"
 
export default class Content extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            itemNum: 0,
            items: [
            ]
        };
    }
 
    deleteItem(num) {
        const selected = document.querySelector('#todo-item'+num);
        if (selected) {
            selected.remove();
        }
    }
 
    addItem() {
        const inputText = document.querySelector('#inputText');
        if (inputText.value) {
            const newItem = <TodoListItem
                id={this.state.itemNum}
                text={inputText.value}
                delete={(num)=>{this.deleteItem(num)}} />;
            this.setState(prevState => ({
                itemNum: prevState.itemNum + 1,
                items: [...prevState.items, newItem]
            }), () => {
                inputText.value = "";
            });
        }
    }
    
 
    render() {
        return (
            <div>
                <input autocomplete="off" id="inputText" type="text" placeholder="입력"></input>
                <input type="button" value="↩" 
                    onClick={()=>{ this.addItem() }}
                />
                <TodoList items={this.state.items}/>
            </div>
        );
    }
}
