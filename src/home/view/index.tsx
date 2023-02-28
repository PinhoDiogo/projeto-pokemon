import { useEffect, useState } from "react";
import Pokemon from "./component";
import { Container, PokemonStyle, PokemonList } from "./style";
import React from "react";

interface Props{
    pokemonsPromises: any[];
}

export default class Home extends React.Component<Props>{

   render(){
        const {pokemonsPromises} = this.props;
        const pokemons = pokemonsPromises;
    
    return (
        <Container>
            <h1>Pokemon</h1>
            <div>
                <PokemonList>
                    {
                        pokemons.map(pokemon => {
                            return (
                                <Pokemon promissed_pokemon={pokemon}>     
                                                           
                                </Pokemon>
                            )
                        })
                    }                    
                </PokemonList>
            </div>
        </Container>
    )
}
}
