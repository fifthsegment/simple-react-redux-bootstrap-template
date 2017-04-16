import React from "react"
import { connect } from "react-redux"

import { doSomething } from "../actions/primaryActions"

@connect((store) => {
  return {
    primaryData: store.primaryData,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(doSomething())
  }

  doSomethingMore() {
    this.props.dispatch(doSomething())
  }

  render() {
      let { primaryData } = this.props;
      return <div>
        <button onClick={this.doSomethingMore.bind(this)}>Randomize</button>
        <div>
        <span><strong>Response from action : </strong>{primaryData.data}</span>
        </div>
      </div>
  }
}
