import { connect } from "react-redux";
import RecentFriends from "./RecentFriends";

function mapStateToProps(state) {
    return {
        friends: state.profileSection.friends
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}


const RecentFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(RecentFriends);

export default RecentFriendsContainer;