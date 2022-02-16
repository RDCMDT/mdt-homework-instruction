//import component Bootstrap React
import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo } from "../../store/actions/todoAction";
import axios from 'axios';

function IndexPost() {
    const todos = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch()
    const addNewTodo = (payload) => {
        console.log(payload)
        const data = {
            id: payload.id,
            title: payload.email,
            complete: false
        }
        dispatch(addTodo(data))
    }
    const deleteTodo = (id) => {
        dispatch(delTodo(id))
    }
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchReqres();
        // console.log(setPosts);
    })

    const fetchReqres = async () => {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            HALAMAN INDEX POST
                            {
                                posts.map(post => 
                                    <div key={post.id} className='d-flex'>
                                        <h3>{(post.email)}</h3>
                                        <Button onClick={() => addNewTodo(post)}>Add New Todo</Button>
                                    </div>
                                )
                            }
                            {
                                todos.map(todo =>
                                    <div key={todo.id} className='d-flex'>
                                        <h1>{JSON.stringify(todo)}</h1>
                                        <Button onClick={() => deleteTodo(todo.id)} variant='danger'>DELETE</Button>
                                    </div>
                                )
                            }
                            <Button onClick={addNewTodo}>Add New Todo</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default IndexPost;