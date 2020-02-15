import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Settings from './Settings';
import { updateUserData, initializeSettings } from "../../redux/settingsReducer";
import Preloader from "../common/Preloader/Preloader";

class SettingsContainer extends React.Component {
    componentDidMount() {
        this.props.initializeSettings();
    }
    
    render() {
        if (!this.props.isInitialized) return <Preloader/>
        return <Settings {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        updateStatus: state.settings.updateStatus,
        isInitialized: state.settings.isInitialized,
        authedId: state.auth.id,
        profileInfo: state.profileSection.profileInfo
    };
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { updateUserData, initializeSettings })
)(SettingsContainer);