import React, { Component } from 'react';
import EditList from "./editlist";

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let items = this.props.items.map((item, Index) => {
            return (
                <EditList
                    key={item.id}
                    item={item}
                    Index={Index}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}
                    cancelEdit={this.props.cancelEdit}
                    updateInputText={this.props.updateInputText}
                    updatePriority={this.props.updatePriority}
                    saveItem={this.props.saveItem}
                    formatDate={this.formatDate}
                />
            );
        });
        return (
            <div className="col-md-6">
                <div />
                <div className="panel panel-default">
                    <div className="panel-heading">View Todos</div>
                    {this.props.header}
                    <div className="display">{items}</div>
                </div>
            </div>
        );
    }
}

export default List;

