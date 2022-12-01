import React, { Component } from 'react'
import Number from './Number';
import Text from './Text';
import TextArea from './TextArea';

export class Form extends Component {
  state = {
    select: '',
    number: 0,
    text: '',
    textarea: '',
    checkbox: false,
    noErrors: true
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {select, number, text, textarea, checkbox} = this.state;
    
    return (
      <form>
      <fieldset>
        <label>Select:
        <select name="select" value={ select } onChange={this.handleChange}>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
        </label>
      </fieldset>

      <fieldset>
        <Number
          number={ number }
          handleChange={ this.handleChange }
        />
      </fieldset>

      <fieldset>
        <Text 
          text={ text }
          handleChange={ this.handleChange }
        />
      </fieldset>
        <TextArea 
          textarea={ textarea }
          handleChange={ this.handleChange }
        />
      <fieldset>

      </fieldset>

      <fieldset>
        <label htmlFor="checkbox">Checkbox:
          <input type="checkbox" name="checkbox" value={ checkbox } onChange={this.handleChange}/>
        </label>

      <input type="file" />
      </fieldset>

    </form>
    )
  }
}

export default Form