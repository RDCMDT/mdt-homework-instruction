import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../helpers'
import CardBalanceHeader from '../components/Balance/CardBalanceHeader';
import CardBalanceHistory from '../components/Balance/CardBalanceHistory';
import ButtonDefault from '../components/Button/ButtonDefault';
import React from 'react';
import Swal from 'sweetalert2'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null
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

    async componentDidMount() {
        await this.getBalance();
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
                        <CardBalanceHistory />
                        <CardBalanceHistory />
                    </Col>
                </Row>
                <Row className='mt-5 mx-5 mb-5'>
                    <ButtonDefault text="Make Transfer" color="black" event={() => { this.goTo('/transfer') }} />
                </Row>
                {console.log(this.state.balance)}
            </div >
        )
    }

}

export default Home;
