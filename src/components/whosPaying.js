const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { FlatButton } = require('material-ui')

// functional component / stateless component

const WhosPaying = (props) => {
  return (<div>Hello</div>)
}

const WhosPaying = (props) => {
  const { currentNight, dispatch } = props
  const { users } = currentNight
  const usersForDisplay = Object.keys(users).map(userKey => {
    users[userKey].color = users[userKey].paying
      ? 'green'
      : 'white'
    return users[userKey]
  })

  return (
    <div>
    <h2>Who is going to pick up the bill?</h2>
    {usersForDisplay.map(user => {
      return (
        <FlatButton 
          key={user.id}
          style={{backgroundColor: user.color}}
          onClick={() => { dispatch({type: 'USER_PAYING', payload: user.id}) } 
        >
         {user.name}
        </FlatButton>
      )
    )}}
    </div>
  )
}

const WhosPaying = React.createClass({
  render: function () {

    return (<div>Hello</div>)
  }

})

const WhosPaying = React.createClass({

  // why can't we use fat arrow?
  render: function () {
    const { currentNight, dispatch } = this.props  // have to use this.props
    const { users } = currentNight
    const usersForDisplay = Object.keys(users).map(userKey => {
      users[userKey].color = users[userKey].paying
        ? 'green'
        : 'white'
      return users[userKey]
    })

    return (
      <div>
        <h2>Who is going to pick up the bill?</h2>
        {usersForDisplay.map(user => {
          return (
            <FlatButton 
              key={user.id}
              style={{backgroundColor: user.color}}
              onClick={() => { dispatch({type: 'USER_PAYING', payload: user.id}) } 
            >
             {user.name}
            </FlatButton>
          )
        )}}
      </div>
    )
  }
})


class WhosPaying extends React.Component {

  // methods are functions which belong to a particular instance (or copy of) a component

  render () {
    const { currentNight, dispatch } = this.props  // have to use this.props
    const { users } = currentNight
    const usersForDisplay = Object.keys(users).map(userKey => {
      users[userKey].color = users[userKey].paying
        ? 'green'
        : 'white'
      return users[userKey]
    })

    return (
      <div>
        <h2>Who is going to pick up the bill?</h2>
        {usersForDisplay.map(user => {
          return (
            <FlatButton 
              key={user.id}
              style={{backgroundColor: user.color}}
              onClick={() => { dispatch({type: 'USER_PAYING', payload: user.id}) } 
            >
             {user.name}
            </FlatButton>
          )
        )}}
      </div>
    )
  }
}


module.exports = WhosPaying
