import React from 'react';
import css from '../Profile.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        );
    }

    render() {
        return (
            <div>
                {
                !this.state.editMode ?   
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || "Here can be your status"}
                    </span>
                </div>
                :
                <div className={css.status_input}>
                    <input type="text"
                        onChange={this.onStatusChange}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        autoFocus
                    />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;