import { useNavigate } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Helpers from '../helpers'
import CardBalanceHeader from '../components/Balance/CardBalanceHeader';
import CardBalanceHistory from '../components/Balance/CardBalanceHistory';
import ButtonDefault from '../components/Button/ButtonDefault';
import React from 'react';
import Swal from 'sweetalert2'

class Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: {
                receipientAccountNo: '',
                amount: 0,
                description: '',
            },
            payeesList: []
        }
    }
    getPayees = async () => {
        await Helpers.http('get', '/payees').then(res => {
            this.setState({ payeesList: res.data.data });
        })
    }
    logout = () => {
        Helpers.logout().then(() => {
            window.location.reload();
        })
    }

    goTo = (url) => {
        window.location.href = url;
    }

    handleTransfer = async () => {
        await Helpers.http('post', '/transfer', this.state.payload).then(res => {
            Swal.fire({
                title: 'Success Transfer!',
                text: `Sebesar ${this.state.payload.amount} sudah di transfer`,
                icon: 'success',
            }).then(() => {
                window.location.reload();
            })
        })
    }

    async componentDidMount() {
        await this.getPayees();
    }

    render() {
        return (
            <div>
                <Container className="pt-3 pb-0 mb-0">
                    <Row>
                        <Col xs={{ span: '1' }}>
                            <div className='buttonLeft'>
                                <i className="fa fa-arrow-left" onClick={() => { this.goTo('/') }}></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Row className='mt-80'>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <h1><strong>Transfer</strong></h1>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <select className='inputDefault' placeholder='Payee' defaultValue={'DEFAULT'} onChange={(e) => { this.setState({ payload: { ...this.state.payload, receipientAccountNo: e.target.value } }) }}>
                            <option value="DEFAULT" disabled>Payee</option>
                            {
                                this.state.payeesList.map((payee, index) => {
                                    return (
                                        <option value={payee.accountNo} key={payee.accountNo}>{payee.name}</option>
                                    )
                                })
                            }
                        </select>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <input className='inputDefault' placeholder='Amount' type="number" onChange={(e) => { this.setState({ payload: { ...this.state.payload, amount: parseInt(e.target.value) } }) }}></input>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <textarea className='textAreaDefault' placeholder='Description' onChange={(e) => { this.setState({ payload: { ...this.state.payload, description: e.target.value } }) }}></textarea>
                    </Col>
                    <Col xs={{ span: 10, offset: 1 }} >
                        <ButtonDefault text="Transfer Now" color="black" event={() => { this.handleTransfer() }} float={true} />
                    </Col>
                </Row>
                {console.log(this.state.payload)}
            </div >
        )
    }

}

export default Transfer;
