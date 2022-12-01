import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Number extends Component {
  render() {
    const {number, handleChange} = this.props;

    return (
      <label>Input Number:
        <input type="number" name="number" value={ number } onChange={handleChange}/>
      </label>
    )
  }
}

Number.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default Number