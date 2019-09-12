import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <p>
        <label>
          <input  name="group1" type="radio" value={this.props.value} checked={this.props.checked} onChange={this.props.onChange} />
          <span  className='check'>{this.props.value}</span> <br/>
        </label>
      </p>
    );
  }
}
