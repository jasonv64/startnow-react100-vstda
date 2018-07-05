import React, { Component } from 'react';
import Header from "./components/header";
import Inputarea from "./components/inputarea";
import List from "./components/list";
import EditList from "./components/editlist";

var counter = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }

  addItem(todoItem) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy.push({
      id: counter++,
      inputText: todoItem.inputText,
      priority: todoItem.priority,
      editEnabled: false
    });
    this.setState({ todoItems: todoItemsCopy });
  }

  deleteItem(itemIndex) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy.splice(itemIndex, 1);
    this.setState({ todoItems: todoItemsCopy });
  }

  editItem(itemIndex) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].editEnabled = true;
    this.setState({ todoItems: todoItemsCopy });
  }

  updateInputText(itemIndex, inputText) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].inputText = inputText;
    this.setState({ todoItems: todoItemsCopy });
  }

  updatePriority(itemIndex, priority) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].priority = priority;
    this.setState({ todoItems: todoItemsCopy });
  }

  cancelEdit(itemIndex, inputText, priority) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].editEnabled = false,
    todoItemsCopy[itemIndex].inputText = inputText;
    todoItemsCopy[itemIndex].priority = priority;
    this.setState({ todoItems: todoItemsCopy });

  }

  saveItem(itemIndex) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].editEnabled = false,
    this.setState({ todoItems: todoItemsCopy });
  }
  render() {
    let header;
    if (this.state.todoItems.length === 0) {
      header = (
        <div className="welcome">
          <strong>
            <p>Welcome to Very Simple Todo App</p>
          </strong>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      );
    }
    return (
      <div className="container">
        <Header />
        <Inputarea addItem={this.addItem} />
        <List
          items={this.state.todoItems}
          deleteItem={this.deleteItem}
          header={header}
          editItem={this.editItem}
          cancelEdit={this.cancelEdit}
          updateInputText={this.updateInputText}
          updatePriority={this.updatePriority}
          saveItem={this.saveItem}
        />

      </div>
    );
  }
}

export default App;
