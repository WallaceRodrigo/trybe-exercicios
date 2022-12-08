import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    dogImage: '',
  };

  componentDidMount() {
    const localStorageUrl = localStorage.getItem('imageUrl');
    if (localStorageUrl) {
      this.setState({ dogImage: localStorageUrl });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.dogImage.includes('terrier');
  }

  componentDidUpdate() {
    const { dogImage } = this.state;
    localStorage.setItem('imageUrl', dogImage);
    const dogBreed = dogImage.split('/')[4];
    alert(dogBreed);
  }

  fetchDog = async () => {
    const dogCeoReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogUrl = await dogCeoReturn.json();
    this.setState({ dogImage: dogUrl.message });
  };

  render() {
    const { dogImage } = this.state;

    return (
      <div>
        <h1>Doguinhos </h1>
        {
          dogImage === '' ? <p>Loading...</p>
            : <img src={ dogImage } alt="Doguinho aleatório" />
        }
        <button type="button" onClick={ () => this.fetchDog() }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
