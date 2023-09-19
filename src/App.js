import './App.css'
import { User } from './components/user/User'
import { Post } from './components/post/Post'
import { store } from './reduxToolkit/store'
import { Provider, useSelector } from 'react-redux'
function App() {
	return (
		<>
			<Provider store={store}>
				<User />
				<Post />
			</Provider>
		</>
	)
}

export default App
