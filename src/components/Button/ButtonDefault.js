import React from 'react';
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