import React, {Component} from 'react'

class AwesomeModuleTwo extends Component{
  render() {
    return (
        <>
          <h1>Hi Two!</h1>
        </>
    )
  }
}

export default {
  routeProps: {
    path: '/awesome-two',
    exact: true,
    component: AwesomeModuleTwo
  },
  name: 'AwesomeModuleTwo',
}