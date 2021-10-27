import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Profile from "./Profile";
import Preloader from "../Comman/Preloader/Preloader";
import axios from "axios";
import { setIsFetching, setUserProfile } from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

class ProfileContainerApi extends React.Component {

    componentDidMount() {
        let param = this.props.match.params.userId;
        if (!param) {
            param = 2;
        }
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${ param }`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        let isFetching = this.props.profilePage.isFetching;
        return (
            isFetching
                ?
                <Preloader/>
                : (<Profile profilePage={ this.props.profilePage }/>)
        )

    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainerApi)

const ProfileContainer = connect(mapStateToProps, { setUserProfile, setIsFetching })(WithUrlDataContainerComponent);
export default ProfileContainer;
