import React from 'react';
import { pagination, selectedPage, showBtn, wrapper } from "./UsersPage.module.css";
import UserItem from "./UserItem/UserItem";

export default function UsersPage( { totalUsersCount,
                                       pageSize,
                                       currentPage,
                                       onPaginationPageChanged,
                                       users,
                                       follow,
                                       unfollow,
                                       showMore
                                   }) {
    let pagesCount = totalUsersCount / pageSize;
    let allPagesPagination = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        allPagesPagination.push(i)
    }
    let shownPagination = allPagesPagination.slice(allPagesPagination.length - 5, allPagesPagination.length);

    if (currentPage === shownPagination[4]) {
        shownPagination = allPagesPagination.slice(shownPagination[3], shownPagination[4] + 4)
    }

    return (
        <>
            <h1>Users</h1>
            <div className={ wrapper }>
                <div className={ pagination }>
                    { shownPagination.map(page => {
                        return <span
                            className={ currentPage === page ? selectedPage : '' }
                            onClick={ () => onPaginationPageChanged(page) }>
                                { page }</span>
                    })
                    }
                </div>
                { users.map(user => <UserItem key={ user.id }
                                                         userInfo={ user }
                                                         follow={ follow }
                                                         unfollow={ unfollow }
                                                         />) }
                <button className={ showBtn } onClick={ showMore }>Show more
                </button>

            </div>

        </>
    )
}