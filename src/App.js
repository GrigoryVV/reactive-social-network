import React from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import withSuspense from './hoc/withSuspense';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/common/Preloader/Preloader';
const Login = React.lazy(() => import('./components/Login/Login'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'));

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader/>

    return (
      <div className="App">
        <HeaderContainer/>
        <Switch>
          <Route path="/login">
            {withSuspense(Login)}
          </Route>
          <Route exact path="/">
            <Redirect to="/profile"/>
          </Route>
          <Route exact path="/profile">
            { this.props.authedUserId ?
              <Redirect to={`/profile/${this.props.authedUserId}`}/>
              : <Redirect to="/login"/>
            }
          </Route>
          <Route path="/profile/:userId?">
            <ProfileContainer/>
          </Route>
          <Route path="/messages">
            {withSuspense(MessagesContainer)}
          </Route>
          <Route path="/users">
            <UsersContainer/>
          </Route>
          <Route path="/settings">
            {withSuspense(SettingsContainer)}
          </Route>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialized: state.app.initialized,
    authedUserId: state.auth.id
  };
}


export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
