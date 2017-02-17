import React, { Component } from 'react';

export default class List extends Component {
    render() {
        return (
            <ul className="app_list">
                {this.props.items.map(item => (
                    <li key={item.id} className="app_list_item">{item.text}</li>
                ))}
            </ul>
        )
    }
}
