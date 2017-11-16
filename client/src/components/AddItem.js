import React, { Component } from 'react';


class AddItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            item: '',
            price: ''
        }
        let products = this.state;
    }

    onItemUpdate(field, event) {
        var parsePrice = require('parse-price')
        if (field === 'item') {
            this.setState({
                item: event.target.value
            })
            return
        }

        if (field === 'price') {
            this.setState({
                price: event.target.value
            })
            return
        }
    }
//Add button function
    addItemBtn(event){
        console.log('New Items: ' + JSON.stringify(this.state))
    }

    
    

    render() {
        return (
            <div style={{ padding: 24 }}>
                <input onChange={this.onItemUpdate.bind(this, 'item')} className="add-item-input"  type='text' placeholder='Add New Item' /><br />
                <input onChange={this.onItemUpdate.bind(this, 'price')} className="price-input"  type='text' placeholder='Price' /><br />
                <button onClick={this.addItemBtn.bind(this)}>Add New Item</button><br/>
            </div>
        )
    }
}

export default AddItem;

