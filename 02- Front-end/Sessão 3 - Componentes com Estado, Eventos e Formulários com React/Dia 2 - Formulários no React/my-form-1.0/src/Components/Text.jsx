import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Text extends Component {
  render() {
    const {text, handleChange} = this.props;
    const limitCaracteres = 80;

    return (
      <label>Input Text:
      <input type="text" name="text" value={ text } onChange={handleChange}/>
      { !text ? 'O campo precisa ser preenchido' : '' }
      { text.length > limitCaracteres ? 'O campo não pode ter mais que 80 caracteres' : '' }
      </label>
    )
  }
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Text