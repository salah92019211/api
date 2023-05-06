import React from 'react'
import UserCard from './UserCard'

const UserList = ({
        listOfUser
    }) => {
        return ( <
                div > {
                    listOfUser.map(user => < UserCard user = {
                            user
                        }
                        />)}</div >
                    )
                }

                export default UserList