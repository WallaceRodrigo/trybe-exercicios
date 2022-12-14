// import React from 'react';
// import { arrayOf } from 'prop-types';

// import Pokemon from './Pokemon';
// import { pokemonType } from '../types';

// class Pokedex extends React.Component {
//   state = {
//     actualPokemon: 0,
//     filteredType: '',
//   };

//   handleClick = (pokemonNuber) => {
//     this.setState((prevState) => ({
//       actualPokemon: (prevState.actualPokemon + 1) % pokemonNuber,
//     }));
//   };

//   filterPokemon = (filteredType) => {
//     this.setState({ filteredType, actualPokemon: 0 });
//   };

//   fetchFilteredPokemon = () => {
//     const { pokemonList } = this.props;
//     const { filteredType } = this.state;

//     return pokemonList.filter((pokemon) => {
//       if (filteredType === '') return true;
//       return pokemon.type === filteredType;
//     });
//   };

//   render() {
//     const { pokemonList } = this.props;
//     const { actualPokemon } = this.state;
//     const filteredPokemon = this.fetchFilteredPokemon();
//     const pokemon = filteredPokemon[actualPokemon];

//     return (
//       <>
//         <h1> Pokédex </h1>
//         <div className="pokedex">
//           <Pokemon pokemon={ pokemonList[actualPokemon] } />
//         </div>
//         <div className="button-container">
//           <button
//             type="button"
//             onClick={() => this.handleClick(filteredPokemon.length)}
//           >
//             Próximo pokémon
//           </button>
//         </div>
//         <div>
//           <button
//             type="button"
//             onClick={ () => this.filterPokemon('Fire') }
//           >
//             Fire
//           </button>
//           <button
//             type="button"
//             onClick={ () => this.filterPokemon('Psychic') }
//           >
//             Psychic
//           </button>

//         </div>
//         {/* <div className="pokedex">
//           { pokemonList
//             .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />) } */}
//         {/* </div> */}
//       </>
//     );
//   }
// }

// Pokedex.defaultProps = {
//   pokemonList: [],
// };

// Pokedex.propTypes = {
//   pokemonList: arrayOf(pokemonType),
// };

// export default Pokedex;

// ./src/components/Pokedex.js
import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: '',
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.fetchFilteredPokemon = this.fetchFilteredPokemon.bind(this);
  }

  nextPokemon(numberOfPokemon) {
    this.setState((state) => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemon,
    }));
  }

  filterPokemon(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  fetchFilteredPokemon() {
    const { pokemonList } = this.props;
    const { filteredType } = this.state;

    return pokemonList.filter((pokemon) => {
      if (filteredType === '') return true;
      return pokemon.type === filteredType;
    });
  }

  render() {
    const { pokemonIndex } = this.state;
    const filteredPokemon = this.fetchFilteredPokemon();
    const pokemon = filteredPokemon[pokemonIndex];

    return (
      <div>
        <Pokemon pokemon={ pokemon } />
        <div>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Fire') }
          >
            Fire
          </button>
          <button
            type="button"
            onClick={ () => this.filterPokemon('Psychic') }
          >
            Psychic
          </button>
        </div>
        <button
          type="button"
          onClick={ () => this.nextPokemon(filteredPokemon.length) }
        >
          Próximo pokémon
        </button>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
