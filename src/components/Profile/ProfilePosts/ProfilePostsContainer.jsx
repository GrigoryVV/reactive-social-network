import { connect } from "react-redux";
import ProfilePosts from "./ProfilePosts";
import { addPost } from "../../../redux/profileReducer";
import {reset} from 'redux-form';


function mapStateToProps(state) {
    return {
        posts: state.profileSection.posts,
        isAuthed: state.auth.isAuthed,
        author: state.auth.login
    };
}

const ProfilePostsContainer = connect(mapStateToProps, {addPost, reset})(ProfilePosts);

export default ProfilePostsContainer;