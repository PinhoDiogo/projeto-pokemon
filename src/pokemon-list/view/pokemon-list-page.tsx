import Pokemon from "./pokemon-component";
import { Container, PokemonList } from "./style";
import React from "react";
import { Props } from ".";

export default class PokemonListPage extends React.Component<Props> {
    render() {
        const { pokemonsPromises } = this.props;
        const pokemons = pokemonsPromises;
        return (<Container>
            <h1>Pokemon</h1>
            <div>
                <PokemonList>
                    {pokemons.map(pokemon => {
                        return (<Pokemon promissed_pokemon={pokemon}>

                        </Pokemon>);
                    })}
                </PokemonList>
            </div>
        </Container>);
    }
}
