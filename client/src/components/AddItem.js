import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions';


class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: ''
        }
    }

    render() {
        return (
            <div style={{ padding: 24 }}>
                <form onSubmit={this.handleSubmit}>
                    <input /*onChange={this.onItemUpdate.bind(this, 'name')}*/ className="add-name-input" type='text' placeholder='Add New Item' /><br />
                    <input /*onChange={this.onItemUpdate.bind(this, 'price')}*/ className="price-input" type='text' placeholder='Price' /><br />
                    <button type="submit" className="submitBtn" /*onClick={this.addItemBtn.bind(this)}*/>Add New Item</button><br />
                </form>
            </div>
        )
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };
}




const mapActionsToProps = { addItem }

export default connect(null, mapActionsToProps)(AddItem);


//Form is taking the new values and adding it to the global state.