import React from 'react';
import AddressInfo from './components/AddressInfo';
import PersonalInfo from './components/PersonalInfo';
import handleValue from './utils/handleValue';
import ProfessionalInfo from './components/ProfessionalInfo';
import './style.css';
import DisplayForm from './components/DisplayForm';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  displayData: false,
  emailError: '',
};

class App extends React.Component {
  state = initialState;

  handleChange = ({ target }) => {
    const { name, value } = target;

    const newValue = handleValue(name, value);

    const errorMsg = this.validateEmail(name, value);

    this.setState((prevState) => ({
      ...prevState,
      [name]: newValue,
      [`${name}Error`]: errorMsg,
    }));
  };

  handleBlur = ({ target }) => {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ displayData: true });
  };

  handleClear = () => {
    this.setState(initialState);
  };

  validateEmail = (name, value) => {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(value) || name !== 'email' ? undefined : 'Email inválido';
  };

  render() {
    const { displayData } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <PersonalInfo
          onChange={ this.handleChange }
          formState={ this.state }
        />
        <AddressInfo
          onChange={ this.handleChange }
          onBlur={ this.handleBlur }
          formState={ this.state }
        />
        <ProfessionalInfo
          onChange={ this.handleChange }
          formState={ this.state }
        />
        <button type="submit">Enviar</button>
        <button type="reset" onClick={ this.handleClear }>Limpar</button>
        { displayData && <DisplayForm formState={ this.state } /> }
      </form>
    );
  }
}

export default App;
