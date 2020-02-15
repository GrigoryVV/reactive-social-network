import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Messages from './Messages';

const MessagesContainer = compose(
    withAuthRedirect,
    connect(null, {})
)(Messages)

export default MessagesContainer;