import React, { Component } from 'react';
//import store from './store';
//import reducers from './reducers';
import './index.css';
import AddItem from './components/AddItem';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <AddItem />
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [this.state].map(item => {
                                return (
                                    <tr key={item}>
                                        <th scope="row">1</th>
                                        <td>input.add-item</td>
                                        <td>pricetarget.value</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
