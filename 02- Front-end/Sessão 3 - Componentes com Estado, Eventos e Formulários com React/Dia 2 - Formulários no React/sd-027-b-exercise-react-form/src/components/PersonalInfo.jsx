import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PersonalInfo extends Component {
  render() {
    const { onChange, formState } = this.props;

    const {
      name,
      email,
      cpf,
      emailError,
    } = formState;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            maxLength="40"
            value={ name }
            onChange={ onChange }
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            maxLength="50"
            value={ email }
            onChange={ onChange }
            required
          />
        </label>
        <span>{ emailError }</span>
        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            maxLength="11"
            value={ cpf }
            onChange={ onChange }
            required
          />
        </label>
      </fieldset>
    );
  }
}

PersonalInfo.propTypes = {
  onChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    emailError: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalInfo;
