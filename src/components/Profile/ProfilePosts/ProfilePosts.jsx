import React from 'react';
import css from './../Profile.module.css';
import { Field, reduxForm } from 'redux-form';
import Post from './Post/Post';
import { maxLength } from '../../../utils/validators/fieldValidators';
import { Input } from '../../common/CustomFields/CustomFields';


class ProfilePosts extends React.Component {

    addPost = (values) => {
        this.props.addPost(values.newPostText, this.props.author);
        this.props.reset("newPostForm")
    }
    
    render() {
        let posts = this.props.posts.map((post) => {
            return <Post key={post.id} message={post.message} likes={post.likes} author={post.author}/>
        });
        return (
            <div className={css.posts}>
                <div className={css.new_post + " block"}>
                    <ProfilePostsForm onSubmit={this.addPost}
                        isAuthed={this.props.isAuthed}
                    />
                </div>
                {posts}
            </div>
        );
    }
}


let maxLength50 = maxLength(50);

let ProfilePostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="flex_wrap">
                <Field 
                    name="newPostText"
                    component={Input}
                    placeholder="Say something"
                    validate={[maxLength50]}
                />
                <button disabled={!props.isAuthed}>Share</button>
            </div>
        </form>
    );
}

ProfilePostsForm = reduxForm({form: "newPostForm"})(ProfilePostsForm)

export default ProfilePosts;