import React, { Component } from 'react';
import PropTypes from 'prop-types';
import countryStates from '../countryStates';

class AddressInfo extends Component {
  render() {
    const { formState, onChange, onBlur } = this.props;

    const {
      address,
      city,
      state,
      addressType,
    } = formState;

    return (
      <fieldset>
        <legend>Dados do endereço</legend>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            maxLength="200"
            required
            value={ address }
            onChange={ onChange }
          />
        </label>

        <label htmlFor="city">
          Cidade
          <input
            type="text"
            name="city"
            id="city"
            maxLength="28"
            required
            value={ city }
            onChange={ onChange }
            onBlur={ onBlur }
          />
        </label>

        <label htmlFor="state">
          Estado
          <select
            id="state"
            name="state"
            required
            value={ state }
            onChange={ onChange }
          >
            {
              countryStates.map((countryState) => (
                <option key={ countryState }>{ countryState }</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="house">
          <input
            type="radio"
            id="house"
            name="addressType"
            value="Casa"
            checked={ addressType === 'Casa' }
            onChange={ onChange }
          />
          Casa
        </label>
        <label htmlFor="apart">
          <input
            type="radio"
            id="apart"
            name="addressType"
            value="Apartamento"
            checked={ addressType === 'Apartamento' }
            onChange={ onChange }
          />
          Apartamento
        </label>
      </fieldset>
    );
  }
}

AddressInfo.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    addressType: PropTypes.string,
  }).isRequired,
};

export default AddressInfo;
