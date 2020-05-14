import React, {Component} from 'react';
import {Card} from "./Card";
import uuid from 'react-uuid';

const faker = require('faker');

export class ListCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    addCard() {
        this.setState({
            cards: [
                ...this.state.cards,
                {
                    imageUrl: "https://source.unsplash.com/random?hash=" + uuid(),
                    firstName: faker.name.findName(),
                    lastName: faker.name.lastName(),
                    birthday: faker.date.past(10),
                    number: this.state.cards.length + 1
                }
            ]
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.addCard(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <div className={"list-card row"}>
            {this.state.cards.map((card, key) => <Card key={key} {...card} />)}
        </div>
    }
}