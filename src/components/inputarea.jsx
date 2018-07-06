import React, { Component } from 'react';

class struct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            priority: '1',
            Index: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleText(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({ inputText: '' })
    }
    render() {
        return (
            <li>
            <div className="col-md-6 li">
                <div className="title">Add New Todo</div>
                <div className="add-to-do">
                    <label className="label">I want to...</label>
                    <textarea name="inputText" className="create-todo-text" value={this.state.inputText} onChange={this.handleText}></textarea>
                </div>
                <div>
                    <label className="label">How much of a priority is this?</label>
                    <div className="select">
                        <select className="priority success create-todo-priority" value={this.props.priority} onChange={this.handleChange}>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                </div>
                <form onClick={this.handleSubmit}>
                    <button className="btn" className="create-todo" name="submit">Add</button>
                </form>
            </div>
            </li>

        );
    }
}

export default struct;
