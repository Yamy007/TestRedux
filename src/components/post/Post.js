import React from 'react'
import { useSelector } from 'react-redux'

export const Post = () => {
	const user = useSelector(state => state.user)

	console.log('post', user)
	return <div>post</div>
}
