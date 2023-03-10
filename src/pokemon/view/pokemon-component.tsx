import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import PokemonEntity from "../../pokemon-list/model/pokemon-entity";
import PokemonLocationEntity from "../../pokemon-list/model/pokemon-location-entity";
import PokemonAbilityEntity from "../../pokemon-list/model/pokemon-ability-entity";
import PokemonTypeEntity from "../../pokemon-list/model/pokemon-type-entity";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import { Container, PokemonStyle } from "./style";

export default function PokemonComponent(props:any){
    const [pokemon, setPokemon] = useState<PokemonEntity>()

    async function getPokemonLocations(locationUrl: string): Promise<PokemonLocationEntity[]>{
        var locations: PokemonLocationEntity[] = [];        
        var response = await fetch(locationUrl);
        var data = await response.json();
        
        data.slice(0,2).map(location => {
            locations.push(new PokemonLocationEntity(location.location_area.name));
        })
        
        return locations;

    }

    function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json())
        .then(async data => {
            if(data.id !== undefined){

                var pokemonAbilities: PokemonAbilityEntity[] = [];
                var pokemonTypes: PokemonTypeEntity[] = [];
                var pokemonLocations: PokemonLocationEntity[] = [];

                data.abilities.slice(0,2).map(pokemonAbility => {
                    pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name))
                });

                data.types.slice(0,2).map(pokemonType => {
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                })

                pokemonLocations = await getPokemonLocations(data.location_area_encounters);
                
                var pokemonEntity: PokemonEntity;
                pokemonEntity = new PokemonEntity(
                    data.id, 
                    data.name, 
                    pokemonTypes, 
                    pokemonLocations, 
                    pokemonAbilities, 
                    data.base_experience
                );

                setPokemon(pokemonEntity);   
                console.log(pokemonEntity);
            }
        })
    }

    useEffect(() => getPokemonByPromise(props.promissed_pokemon), [])

    if(pokemon !== undefined){
        return (
            <Container>
                <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                    <Link to={{pathname:'/pokemon-details/', search: `?pokemon=${JSON.stringify(pokemon)}`}}>
                        <img src={pokemon.imageUrl} alt={pokemon.name}/>
                    </Link>
                    <span>{pokemon.name.toUpperCase()}</span>
                </PokemonStyle>
            </Container>
        )
    }else{
        return(
            <div></div>
        )
    }    
}