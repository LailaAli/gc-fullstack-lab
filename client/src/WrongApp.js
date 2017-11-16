import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './components/ShoppingCart';
import AddNewItem from './components/AddNewItem';

class App extends Component {


    addNewItem = (item) => {
        this.setState({
          buyItems:[item]
        })
      }; 

    render() {
        const addNewItem  = this.props.item.map((item) => (
            <AddNewItem key={item.id}item={item}/>
        ));
        return (
            <div className="App">
                <header> 
                    <h1>Shopping List</h1>
                    <AddNewItem addItem={this.addNewItem} />
                </header>
                <div className="tableContainer">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                addNewItem.map(item => {
                                    return (
                                        <tr key={item}>
                                            <th scope="row">1</th>
                                            <td>{item}</td>
                                            <td>
                                                <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    addItem(e) {
        /*         e.preventDefault(); */
        const { buyItems } = this.state;
        const newItem = this.newItem.value;
        const isOnTheList = buyItems.includes(newItem);

        if (isOnTheList) {
            this.setState({
            })
        } else {
            newItem !== '' && this.setState({
                buyItems: [this.state.buyItems, newItem],
            })
        }
        this.addForm.reset();
    }

    removeItem(item) {
        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        });
        this.setState({
            buyItems: [...newBuyItems]
        })
    }
}

function mapStateToProps(state) {
    return {
        buyItems: state.buyItem
    }
}

const mapActionsToProps = {
    AddNewItem
}

export default connect(mapStateToProps, mapActionsToProps)(App);
