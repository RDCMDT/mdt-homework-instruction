import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../../helpers/index'

class CardBalanceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logout = () => {
        Helpers.logout().then(() => {
            window.location.reload();
        });
    }

    getUsername = async () => {
        let uname = await Helpers.getCookies('username');
        this.setState({ accountHolder: uname });
    }

    componentDidMount() {
        this.getUsername();
    }

    render() {
        return (
            <Row className="m-0 p-0">
                <Col md="6" lg="4" xl="4" sm="10" xs="10" className='m-0 p-0 mt-80'>
                    <Card className="shadow-lg m-0 p-0" style={{ borderRadius: '0px 50px 50px 0px' }}>
                        <Card.Body className="">
                            <h5><strong>You Have</strong></h5>
                            <h1 className='heading-1'><strong className='balance'>SGD {Helpers.currencyFormat(parseInt(this.props.data?.balance ?? 0))}</strong></h1>
                            <p className="lead mt-4">
                                <span>Account No</span> <br />
                                <strong className='balance-sub-1-price'>{this.props.data?.accountNo}</strong>
                            </p>
                            <p className="lead mt-4">
                                <span>Account Holder</span> <br />
                                <strong className='balance-sub-1-price'>{this.state.accountHolder}</strong>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }

}

export default CardBalanceHeader;