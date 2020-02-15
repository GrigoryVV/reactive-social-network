import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    isAuthed: state.auth.isAuthed
});

export const withAuthRedirect = (Component) => {
    class WithAuthRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthed) return <Redirect to="/login"/>;

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(WithAuthRedirectComponent);
}