import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Helpers from '../../helpers/index'
import moment from 'moment';

class CardBalanceHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Card className="shadow-lg m-0 p-0 mb-5" style={{ borderRadius: '30px' }}>
                <Card.Body className="pl-4 py-4">
                    <p className='text-muted mb-4'><strong>{moment(this.props.data?.date).format('DD MMMM YYYY')}</strong></p>
                    {
                        this.props.data.data?.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col xs="6">
                                        <p>
                                            <strong>{item.receipient?.accountHolder}{item.sender?.accountHolder}</strong><br />
                                            <span className='text-muted text-sm' style={{ fontSize: '.8rem' }}>{item.receipient?.accountNo}{item.sender?.accountNo}</span>
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