const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')


//components
const NewUserLink = require('./NewUserLink')

const App = (props) => {

//If we want to make Userslist an admin page only fecthing data on load
//if props.location is UsersList
// fetch relevant data
// dispatch action (type: userlist payload: relevant data)
//in the action : define newstate filling with relevant data
// end action with rendering newstate --> userList.js
// behold the list
	return (

		<div>
			<div id='logoHeader'>
				<h1>Drink Splitter</h1>
				<img src="http://www.kofusion.com/wp-content/uploads/2009/02/featured_drinks.jpg" width='100px'/>
			</div>
			<div className="navBar">
				<nav>
					<ul className="navList">
						<li className="navListItem"><Link to="/">Home</Link></li>
						<li className="navListItem"><Link to="/nightout">Current Night Out</Link></li>
	          <li className="navListItem"><Link to="/userslist">Users List</Link></li>
	          <li className="navListItem"><Link to="/newnightout">New Night Out</Link></li>
						<li id='logout' className="navListItem" onClick={() => props.dispatch({type:'LOGOUT'})}>Log Out</li>
					</ul>
				</nav>
			</div>
			{props.children}
		</div>
	)
}

module.exports = connect((state) => state)(App)
