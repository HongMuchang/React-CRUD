import React, { Component } from "react";
import { connect } from "react-redux";

import { readEvents } from "../actions";

class Events_Index extends Component {
  componentDidMount() {
    this.props.readEvents(); //外部のAPIサーバーから取得
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(Events_Index);
