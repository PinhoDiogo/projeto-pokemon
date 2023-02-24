import { useState } from "react";
import PokemonEntity from "../home/entities/pokemon-entity";
import { pokemonLocal } from "../utils/consts";
import { Container, PokemonStyle } from "./style";

export default function PokemonDetails (){

    const [pokemon, PokemonDetails] = useState<PokemonEntity>(pokemonLocal as PokemonEntity)
    return(
        <Container>
        <PokemonStyle>
            <img src={pokemon.imageUrl} alt={pokemon.name}/>
            <span>{pokemon.name}</span>
            <hr/>
            <span className="pokemon-name">{pokemon.hp}</span>
            <div>
                <div>
                    <h6>Habilidades</h6>
                    {
                        pokemon.abilities.map(ability=>{
                            return (
                              <p><span>{ability.name}</span></p>
                            )
                        })
                    }
                </div>
                <div>
                    <h6>Localização</h6>
                    {
                        <div>
                            <p><span>{pokemon.locations[0].name}</span></p>
                            <p><span>{pokemon.locations[1].name}</span></p>
                            <p><span>{pokemon.locations.length>2 ? '...':''}</span></p>
                        </div>
                    }
                </div>
                <div>
                    <h4>Tipo</h4>
                </div>
            </div>
        </PokemonStyle>
    </Container>
    )
}