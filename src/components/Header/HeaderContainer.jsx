import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutUser } from './../../redux/authReducer';

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthed: state.auth.isAuthed,
        login: state.auth.login
    };
}

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);