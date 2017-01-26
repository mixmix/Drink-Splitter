const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const NewUserLink = (props) => {

	return (
		<div>
    <Link to="/newUser"> New User </Link>
		</div>
	)
}

module.exports = connect((state) => state)(NewUserLink)
