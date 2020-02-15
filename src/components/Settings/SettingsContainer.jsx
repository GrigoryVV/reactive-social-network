import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Settings from './Settings';
import { updateUserData } from "../../redux/settingsReducer";

const mapStateToProps = (state) => {
    return {
        updateStatus: state.settings.updateStatus
    };
}

const SettingsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, { updateUserData })
)(Settings)

export default SettingsContainer;