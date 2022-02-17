import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../../helpers/index'

class ButtonDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    eventHandler() {
        this.props.event();
    }

    render() {
        return (
            <button className={`${this.props.color === 'black' ? 'buttonDefault' : 'buttonDefaultInverted'} ${this.props.float ? 'floatButton' : ''} ${this.props.class}`} onClick={() => { this.eventHandler() }}>
                {this.props.text}
            </button>
        );
    }

}

export default ButtonDefault;