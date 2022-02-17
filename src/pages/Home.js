import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../helpers'
import CardBalanceHeader from '../components/Balance/CardBalanceHeader';
import CardBalanceHistory from '../components/Balance/CardBalanceHistory';
import ButtonDefault from '../components/Button/ButtonDefault';
import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null,
            historyTransaction: null
        }
    }
    logout = () => {
        Helpers.logout().then(() => {
            window.location.reload();
        })
    }

    getBalance = async () => {
        await Helpers.http('get', '/balance').then(res => {
            this.setState({ balance: res.data });
        })
    }

    goTo = (url) => {
        window.location.href = url;
    }

    // handleTransfer = async () => {
    //     await Helpers.http('post', '/transfer', this.state.payload).then(res => {
    //         Swal.fire({
    //             title: 'Success Transfer!',
    //             text: `Sebesar ${this.state.payload.amount} sudah di transfer`,
    //             icon: 'success',
    //         }).then(() => {
    //             window.location.reload();
    //         })
    //     })
    // }

    getHistoryTransaction = async () => {
        let data = [];
        await Helpers.http('get', '/transactions').then(res => {
            data = res.data.data;
        })

        const groups = data.reduce((groups, item) => {
            const date = item.transactionDate.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(item);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                data: groups[date]
            };
        });

        this.setState({ historyTransaction: groupArrays });
    }

    async componentDidMount() {
        await this.getBalance();
        await this.getHistoryTransaction();
    }

    render() {
        return (
            <div>
                <Container className="pt-3 pb-0 mb-0">
                    <Row>
                        <Col xs={{ span: '1', offset: '9' }}>
                            <p onClick={() => { this.logout() }}>Logout</p>
                        </Col>
                    </Row>
                </Container>
                <CardBalanceHeader data={this.state.balance} />
                <Row className='mt-5'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <p><strong>Your Transaction History</strong></p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        {
                            this.state.historyTransaction?.map((item, index) => {
                                return (
                                    <CardBalanceHistory key={index} data={item} />
                                );
                            })
                        }
                    </Col>
                </Row>
                <Row className='mt-5 mx-5 mb-5'>
                    <ButtonDefault text="Make Transfer" color="black" event={() => { this.goTo('/transfer') }} />
                </Row>
                {console.log(this.state.historyTransaction)}
            </div >
        )
    }

}

export default Home;
