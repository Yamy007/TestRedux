import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../reduxToolkit/slice/userSlice'

export const User = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(userActions.getAll())
	}, [])
	const user = useSelector(state => state.user)

	console.log('user', user)
	return <div>User</div>
}
