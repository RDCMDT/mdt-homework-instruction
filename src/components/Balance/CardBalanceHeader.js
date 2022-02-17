import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../../helpers/index'

class CardBalanceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: '$123',
            accountNo: '123-321',
            accountHolder: 'John Doe',
        }
    }

    logout = () => {
        Helpers.logout().then(() => {
            window.location.reload();
        });
    }

    render() {
        return (
            <Row className="m-0 p-0">
                <Col md="6" lg="4" xl="4" sm="10" xs="10" className='m-0 p-0 mt-80'>
                    <Card className="shadow-lg m-0 p-0" style={{ borderRadius: '0px 50px 50px 0px' }}>
                        <Card.Body className="">
                            <h5><strong>You Have</strong></h5>
                            <h1 className='heading-1'><strong className='balance'>SGD {this.state.balance}</strong></h1>
                            <p className="lead mt-4">
                                Account No
                                <h2><strong>{this.state.accountNo}</strong></h2>
                            </p>
                            <p className="lead mt-4">
                                Account Holder
                                <h2><strong>{this.state.accountHolder}</strong></h2>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }

}

export default CardBalanceHeader;