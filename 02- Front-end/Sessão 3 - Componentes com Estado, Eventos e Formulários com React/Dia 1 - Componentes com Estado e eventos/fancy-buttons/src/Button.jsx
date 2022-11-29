import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      clicksBtn1: prevState.clicksBtn1 + 1,
    }))
  }

  handleClick2() {
    this.setState((prevState) => ({
      clicksBtn2: prevState.clicksBtn2 + 1,
    }))
  }

  handleClick3() {
    this.setState((prevState) => ({
      clicksBtn3: prevState.clicksBtn3 + 1,
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksBtn1, clicksBtn2, clicksBtn3} = this.state;
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={ { backgroundColor: this.getButtonColor(clicksBtn1) } }
          >{`Cliques no Botão: ${clicksBtn1}`}
        </button>
        <button
          onClick={this.handleClick2}
          style={ { backgroundColor: this.getButtonColor(clicksBtn2) } }
          >{`Cliques no Botão: ${clicksBtn2}`}
        </button>
        <button
          onClick={this.handleClick3}
          style={ { backgroundColor: this.getButtonColor(clicksBtn3) } }
          >{`Cliques no Botão: ${clicksBtn3}`}
        </button>
      </div>
    )
  }
}

export default Button;