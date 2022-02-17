import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../../helpers/index'

class ButtonDefault extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goTo() {
        window.location.href = this.props.url;
    }

    render() {
        return (
            <button className={this.props.color === 'black' ? 'buttonDefault' : 'buttonDefaultInverted'} onClick={() => { this.goTo() }}>
                {this.props.text}
            </button>
        );
    }

}

export default ButtonDefault;