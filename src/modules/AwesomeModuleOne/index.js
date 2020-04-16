import React, {Component} from 'react'

class AwesomeModuleOne extends Component{
  render() {
    return (
        <>
          <h1>Hi One!</h1>
        </>
    )
  }
}

export default {
  routeProps: {
    path: '/awesome-one',
    exact: true,
    component: AwesomeModuleOne
  },
  name: 'AwesomeModuleOne',
}