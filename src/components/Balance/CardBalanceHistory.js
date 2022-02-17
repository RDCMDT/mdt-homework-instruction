import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../../helpers/index'

class CardBalanceHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '6 Sep 2021',
            transaction: [
                {
                    "transactionId": "620d391f6b5bd12c91486431",
                    "amount": 100000,
                    "transactionDate": "2022-02-16T17:49:19.787Z",
                    "description": "Default money-in transaction",
                    "transactionType": "received",
                    "sender": {
                        "accountNo": "1111-111-1111",
                        "accountHolder": "Jane"
                    }
                },
                {
                    "transactionId": "620df200d37c6dc5d9ace281",
                    "amount": 1000,
                    "transactionDate": "2022-02-17T06:58:08.045Z",
                    "description": "RWrwer",
                    "transactionType": "transfer",
                    "receipient": {
                        "accountNo": "7174-429-2937",
                        "accountHolder": "Emmie"
                    }
                },
                {
                    "transactionId": "620df1c9d37c6dc5d9ace277",
                    "amount": 123,
                    "transactionDate": "2022-02-17T06:57:13.678Z",
                    "description": "TEst",
                    "transactionType": "transfer",
                    "receipient": {
                        "accountNo": "6554-630-9653",
                        "accountHolder": "Andy"
                    }
                },
            ]
        }
    }

    render() {
        return (
            <Card className="shadow-lg m-0 p-0 mb-5" style={{ borderRadius: '30px' }}>
                <Card.Body className="pl-4 py-4">
                    <p className='text-muted mb-4'><strong>{this.state.date}</strong></p>
                    {
                        this.state.transaction.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col xs="6">
                                        <p>
                                            <strong>{item.receipient?.accountHolder}{item.sender?.accountHolder}</strong><br />
                                            <span className='text-muted text-sm' style={{fontSize: '.8rem'}}>{item.receipient?.accountNo}{item.sender?.accountNo}</span>
                                        </p>
                                    </Col>
                                    <Col xs="6">
                                        <p className={item.transactionType === 'received' ? 'text-success currencyNumberTransaction' : 'text-danger currencyNumberTransaction'}>
                                            <strong>{`${item.transactionType === 'received' ? '+' : '-'}${Helpers.currencyFormat(parseInt(item.amount))}`}</strong><br />
                                        </p>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Card.Body>
            </Card>
        );
    }

}

export default CardBalanceHistory;