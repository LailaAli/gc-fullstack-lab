import React, { Component } from 'react';
//import store from './store';
//import reducers from './reducers';
import './index.css';
import AddItem from './components/AddItem';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {

render() {
    return (
        <div className="App">
            <ShoppingCart  />
            <AddItem />
        </div>
    );
}
}

export default App;
