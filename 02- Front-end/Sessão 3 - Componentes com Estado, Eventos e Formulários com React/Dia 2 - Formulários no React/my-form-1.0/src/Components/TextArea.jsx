import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TextArea extends Component {
  render() {
    const { textarea, handleChange } = this.props;

    return (
      <label>
        <textarea name="textarea" value={ textarea } onChange={handleChange}></textarea>
        { !textarea ? 'O campo precisa ser preenchido' : '' }
    </label>
    )
  }
}

TextArea.propTypes = {
  textarea: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea