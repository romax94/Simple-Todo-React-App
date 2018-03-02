import React, { Component } from 'react';
import List from './List.js';

export default class APP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            items: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value.toLowerCase()
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            text: '',
            items: prevState.items.concat(newItem)
        }));
    }

    handleDelete(id) {
        let newState = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: newState
        });
    }

    render() {
        return (
            <div className="app_wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Your goal"
                        className="app_form_text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="app_form_submit"
                    />
                </form>
                <List
                    items={this.state.items}
                    handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}
