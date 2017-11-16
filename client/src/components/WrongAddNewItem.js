import React, { Component } from 'react';
import App from '../App';

class AddNewItem extends Component {

    render() {
        return (
            <div className="formItem">

                <form ref={input => this.addForm = input} className="NewItemForm">

                    <input ref={input => this.newItem = input} type="text" placeholder="Add New Item" className="newItem" />

                    <button onClick={(e) => this.props.addItem(e.target.value)} type="button"  className="AddNewItemButton">
                        Add
                    </button>
                </form>
            </div>
        );
    }

      addNewItem = (event) => {
        this.setState({
          buyItems: event.target.value
        })
      }; 

}

export default AddNewItem;
