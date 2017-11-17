import React, { Component } from 'react';
import { connect } from 'react-redux';

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
{/*                 <input onChange={this.onItemUpdate.bind(this, 'name')} className="add-name-input" type='text' placeholder='Add New Item' /><br />
                <input onChange={this.onItemUpdate.bind(this, 'price')} className="price-input" type='text' placeholder='Price' /><br />
                <button onClick={this.addItemBtn.bind(this)}>Add New Item</button><br /> */}
            </div>
        )
    }
}

// const mapActionsToProps = { add }

// export default connect(null, mapActionsToProps)(AddItem);
export default AddItem;
