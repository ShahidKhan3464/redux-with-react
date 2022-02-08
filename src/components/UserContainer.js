import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

export default function UserContainer() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const { loading, error, users } = userData

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        loading
            ? <h2>Loading</h2>
            : error
                ? <h2>{error}</h2>
                : <div>
                    <h2>User List</h2>
                    <div>
                        {users.map(user => <p>{user.name}</p>)}
                    </div>
                </div>
    )
}
