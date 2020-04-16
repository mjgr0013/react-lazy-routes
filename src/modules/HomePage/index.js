import React, {Component} from 'react'

class HomePage extends Component{
  render() {
    return (
        <>
          <h1>Home Page</h1>
        </>
    )
  }
}

export default {
  routeProps: {
    path: '/',
    exact: true,
    component: HomePage
  },
  name: 'HomePage',
}