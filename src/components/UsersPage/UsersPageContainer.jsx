import React from 'react';
import { connect } from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    setIsFetching
} from '../../redux/users-reducer';
import axios from 'axios';
import UsersPage from './UsersPage';
import Preloader from "../Comman/Preloader/Preloader";
import { goToUserProfile } from "../../redux/profile-reducer";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    showMore = (event) => {
        // const btn = event.target;
        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => {
        //         const usersShow = response.data.items.slice(this.start, this.end);
        //         if (usersShow.length < 4) {
        //             btn.hidden = true;
        //         }
        //
        //         this.start = this.end;
        //         this.end += 4;
        //         this.props.setUsers(usersShow);
        //     })

    }

    onPaginationPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ pageNumber }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let isFetching = this.props.isFetching;

        return (
            isFetching
                ?
                <Preloader />
                : (<UsersPage
                    onPaginationPageChanged={ this.onPaginationPageChanged }
                    showMore={ this.showMore }
                    totalUsersCount={ this.props.totalUsersCount }
                    pageSize={ this.props.pageSize }
                    currentPage={ this.props.currentPage }
                    users={ this.props.users }
                    follow={ this.props.follow }
                    unfollow={ this.props.unfollow }
                />)
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersPageContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersAPIComponent)

export default UsersPageContainer;