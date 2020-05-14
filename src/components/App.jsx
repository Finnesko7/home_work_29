import React, {Component} from 'react';
import '../style/App.css';
import {ListCard} from "./ListCard";


class App extends Component {

    render() {
        return (
            <div>
                <h1>My Home Work</h1>
                <div className="container col-lg-10 col-md-10 col-sm-5">
                    <ListCard/>
                </div>
            </div>
        );
    }
}

export default App;