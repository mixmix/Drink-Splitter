
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const ReactDOM = require('react-dom')
const {TextField} = require('material-ui')
const {RaisedButton} = require('material-ui')
const request = require('superagent')

const NewUser = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    const userName = this.refs.userName.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const confirmPassword = this.refs.confirmPassword.value

    const newUserData = {
      'userName': userName,
      'email': email,
      'password': password
    }

    if (userName.length > 0) {
      request.post('api/v1/users')
      .send({newUserData})
      .end((err, data) => {
        this.props.router.push('/nightout')
        if (err) {
          alert('Oh no! error', err);
        }
      })
    } else {
      this.refs.userName.focus()
    }
  },
  render: function () {
    const {showingRegisterForm, dispatch} = this.props
    const newUserForm = (
      <div>
        <h2>New User Form</h2>
        <form>
          <p>Name:</p><input type='text' ref='userName' placeholder='User Name' />
          <p>Email:</p><input type='text' ref='email' placeholder='email' />
          <p>Password:</p><input type='text' ref='password' placeholder='password' />
          <p>Confirm Password:</p><input type='text' ref='confirmPassword' placeholder='Confirm password' />
          <button onClick={this.handleSubmit} className='button'>Creat Acount</button>
        </form>
      </div>
    )
    const registerButton = (
      <div className='homePageButton'>
        <RaisedButton className='homePageButton' onClick={() => dispatch({type: 'DISPLAY_REGISTER_FORM'})}>Register </RaisedButton>
      </div>
    )

    return showingRegisterForm
    ? newUserForm
    : registerButton
  }
})

module.exports = connect((state) => state)(NewUser)
