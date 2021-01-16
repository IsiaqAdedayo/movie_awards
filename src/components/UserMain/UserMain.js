import React from 'react'
import UserFilter from '../UserFilter/UserFilter';
import "./UserMain.css"

const UserMain = () => {
    return (
        <div>
            <h1>User List</h1>
            <UserFilter />

            <div className="return">
                <p><i className="fas fa-arrow-left left"></i> &nbsp; RESULTS</p>
            </div>

            <div className="user_profile">
                <div className="userPicture">

                </div>

                <div className="userDetails">
                    <h2>Mrs. Shalom Chioma&nbsp; <span>25</span></h2>

                    <p>9278 new road, kilcoole, waterford</p>

                    <div className="userEmail">
                        <p><i className="far fa-envelope"></i> brad.gibson@example.com</p>
                    </div>

                    <div className="dateJoined">
                        <p>JOINED: 2002-05-21</p>
                    </div>

                    <p><i className="fas fa-phone-volume phone"></i> 011-962-7516</p>
                    <p><i className="fas fa-mobile-alt"></i> 011-962-7516</p>
                </div>
            </div>
        </div>
    )
}

export default UserMain
