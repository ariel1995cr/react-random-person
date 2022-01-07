import React from 'react';
import {connect} from 'react-redux';
import { Grid } from '@chakra-ui/react'
import User from "./User";

const UsersList = (props) => {
    
    const renderUserList = () => {
        return (
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                {props.persons.map((person) => <User key={person.login.uuid} {...person} />)}
            </Grid>
        )
    }

    return (
        <div>
            {props.persons && renderUserList()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };
};

export default connect(mapStateToProps)(UsersList);