import React, { Component } from 'react';

class EditList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: this.props.item.inputText,
            initialPriority: this.props.item.priority,
            priority: this.props.item.priority,
            Index: this.props.item.priority,
            dueDate: ''
        }
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.inputTextChange = this.inputTextChange.bind(this);
        this.priorityChange = this.priorityChange.bind(this);
        this.cancelChange = this.cancelChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    getPriority() {
        switch (this.state.priority) {
            case '1':
                return "success"
            case '2':
                return "warning"
            case '3':
                return "danger"
            case '4':
                return 'disabled'
        }
    }

    onClickRemove() {
        let Index = parseInt(this.props.Index);
        console.log(Index);
        this.props.deleteItem(Index);
    }

    onClickEdit() {
        let Index = parseInt(this.props.Index);
        this.props.editItem(Index);
    }

    inputTextChange(e) {
        let Index = parseInt(this.props.Index);
        let inputText = e.target.value
        this.props.updateInputText(Index, inputText);
        this.setState({ inputText });
    }

    priorityChange(e) {
        let Index = parseInt(this.props.Index);
        let priority = e.target.value;
        this.props.updatePriority(Index, priority);
        this.setState({ priority });
    }

    cancelChange() {
        let Index = parseInt(this.props.Index);
        let inputText = this.state.inputText;
        this.props.cancelEdit(Index, inputText, this.state.initialPriority);
        this.setState({ priority: this.state.initialPriority })
    }

    handleDate(e) {
        this.setState({ dueDate: e.target.value });
    }

    handleSave() {
        let Index = parseInt(this.props.Index);
        this.props.saveItem(Index);
        this.props.updatePriority(Index, this.state.priority);
        this.setState({ initialPriority: this.state.priority });
    }

    finishedItem(e) {
        if (e.target.checked) {
            this.setState({
                priority: "4"
            })
        } else {
            this.setState({
                priority: this.props.item.priority
            });
        }
    }

    render() {
        let body;
        if (this.props.item.editEnabled) {
            body = (
                <div className="list-group-item li success">
                    <div className="form-group">
                        <label>Description</label>
                        <br />
                        <textarea className="update-todo-text" value={this.props.item.inputText}
                            onChange={this.inputTextChange} />
                    </div>

                    <div className="row">
                        <div className="due-date" className="col-xs-6">
                            <label>Due Date</label>
                            <input type="date" className="update-todo-date"
                                value={this.state.dueDate} onChange={this.handleDate} />

                        </div>
                    </div>
                    <div className="priority" className="col-xs-6">
                        <label>Priority</label>
                        <select className="update-todo-priority" onChange={this.priorityChange}
                            defaultValue={this.props.item.priority}>
                            <option value="1">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button className="update-todo" type="submit" onClick={this.handleSave}>Save</button>
                        <button className="cancel-todo" type="submit" onClick={this.cancelChange}>Cancel</button>
                    </div>
                </div>
            );
        } else {
            body = (
                <div className="list-group-item li success-li">
                    <input type="checkbox" className="checkbox" onChange={this.finishedItem} value="off" />
                    {this.props.item.inputText}
                    <button className="edit-todo" onClick={this.onClickEdit}>
                        <span className="glyphicon glyphicon-edit pull-right" />
                    </button>
                    <button className="delete-todo" onClick={this.onClickRemove} >
                        <span className="glyphicon glyphicon-trash pull-right" />
                    </button>
                </div>
            );
        }
        return body;
    }
}

export default EditList;