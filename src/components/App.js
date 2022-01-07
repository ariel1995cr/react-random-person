import React, {useEffect} from 'react';
import axios from 'axios';
import {addPerson} from '../actions/person';
import Header from './Header';
import { Container } from '@chakra-ui/react'
import { connect } from 'react-redux';
import UsersList from './UsersList';

const serverDemo = 'https://randomuser.me/api/?page=1&results=16'
const serverNode = 'http://localhost:3000/users'
const isDemo = true

const App = (props) => {

    useEffect(() => fetchUsers(), []);

    const fetchUsers = () => {
        axios.get(isDemo?serverDemo:serverNode)
            .then(response => {
                props.addPerson(response.data.results);
            })
    }

    return (
        <div>
            <Header />
            <Container maxW='fit-content' >
                <UsersList/>
            </Container>
        </div>
    )
}

export default connect(null, {addPerson})(App)