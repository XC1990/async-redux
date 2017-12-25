
import React, { Component } from 'react';
import { connect } from 'react-redux'
import userActions from '../actions/userAction'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onGet}>GetUsers</button>
            <button onClick={props.onAdd}>AddUser</button>
            <button onClick={props.onDelete}>DeleteUser</button>
            <button onClick={props.onUpdateName}>UpdateUserName</button>
            <span></span>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const user = {
        id: "5",
        firstName: "Xu",
        lastName: "Cheng",
        email: "123@gaga.com",
        age: 27,
        companyId: 1
    }
    return {
        onGet: () => { dispatch(userActions.fetchUsers()) },
        onAdd: () => { dispatch(userActions.addUser(user)) },
        onDelete: () => { dispatch(userActions.deleteUser(user.id)) },
        onUpdateName: () => { dispatch(userActions.updateUserName(user.id, 'Adam')) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Button)