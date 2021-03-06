const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { MuiThemeProvider } = require('material-ui/styles')
const request = require('superagent')
const reducer = require('./reducer')
const initialState = require('../state')

//Top Level Components
const App = require('./components/app')

const NewUser = require('./components/containers/newUserPage')
const NightOut = require('./components/containers/nightOutPage')
const NewNightOut = require('./components/containers/newNightOut')
const UserProfile = require('./components/userProfile')
const UsersList = require('./components/usersList')
const Home = require('./components/home')

const store = createStore(reducer, initialState)
store.subscribe(()=> {
})
const Root = ({store}) => {
	return (
		<MuiThemeProvider>
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}>
						<IndexRoute component={Home} />
						<Route path = '/newUser' component={NewUser} />
						<Route path='/userprofile' component={UserProfile} />
						<Route path='/nightout' component={NightOut} />
						<Route path='/newnightout' component={NewNightOut} />
						<Route path='/userslist' component={UsersList} />
					</Route>

				</Router>
			</Provider>
		</MuiThemeProvider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const root = document.querySelector('#app')
	ReactDOM.render(
		<Root store={store}/>,
		root
	)
	request('/api/v1/users', (err, res) => {
		store.dispatch({type:'UPDATE_USERS', payload: res.body})
	})
})

// <Route path = 'new-user' component={NewUser} />
// <NewUser/>
