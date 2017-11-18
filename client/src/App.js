import React, { Component } from 'react';
import { connect } from 'react-redux';

//import store from './store';
//import reducers from './reducers';
import './index.css';
import AddItem from './components/AddItem';
import { addItem } from './actions/index';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {

    render() {
        return (
            <div className="App">
                <ShoppingCart />
                <AddItem onSubmit={this.props.addItem} />
            </div>
        );
    }
}

const mapActionsToProps = { addItem }

export default connect(null, mapActionsToProps)(App);
